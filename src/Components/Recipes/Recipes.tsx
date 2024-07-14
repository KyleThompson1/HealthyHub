import { useEffect, useState } from "react";
import axios from 'axios';
import '../../App.css';

interface Recipe {
    sourceUrl: string;
    title: string;
    image: string;
    extendedIngredients: { name: string }[];
    analyzedInstructions: { steps: { step: string }[] }[];
}

interface RecipesProps {
    fetchNewRecipe: () => void;
}

export const Recipes: React.FC<RecipesProps> = ({ fetchNewRecipe }) => {

    const [recipe, setRecipe] = useState<Recipe | null>(null);

    async function getRandomRecipe() {
        try {
            // This is my own key from the website
            const apiKey = '7aad27aaee7a4ce4ba2173f7e8164098';

            // Make the spoonacular API call to get a random recipe
            let response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);

            // Logs all the data for the recipe to the console
            console.log(21, response.data);

            // Need to store the recipe in the recipe variable
            setRecipe(response.data.recipes[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRandomRecipe();
    }, []);

    return (
        <div className='recipe-row'>
            <button onClick={getRandomRecipe}>
                Give me a random recipe
            </button>

            <div>
                Name:
                <a target='_blank' rel='noreferrer' href={recipe?.sourceUrl}>
                    {recipe?.title}
                </a>
            </div>
            <img className='recipe-img shadow-lg' src={recipe?.image} alt={recipe?.title || 'Recipe image'} />

            <div className='ingredients'>
                <div>
                    Ingredients:
                </div>
                {recipe?.extendedIngredients.map((ingredient, index) =>
                    <span key={index}>
                        {index !== recipe?.extendedIngredients.length - 1 ? ingredient.name + ", " : ingredient.name}
                    </span>
                )}

                {recipe?.analyzedInstructions.map((instruction, instructionIndex) =>
                    <ol key={instructionIndex}>
                        {instruction.steps?.map((step, stepIndex) =>
                            <li key={stepIndex}>
                                {step.step}
                            </li>
                        )}
                    </ol>
                )}
            </div>
        </div>
    )
}
