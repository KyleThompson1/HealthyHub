import { Header } from "../Components/Navbar and Footer/Header"
import { Footer } from "../Components/Navbar and Footer/Footer"
import missionPic from '../Images/Misc/Mountain Inspiration.jpg';

export const MissionStatement = () => {

    return (

        <div className='App'>

            <Header />

            <div className='mission-container' style={{ padding: '40px' }}>

                <img src={missionPic} className='mission-image' alt='Mission Image' />

                <h1 style={{ color: 'green', fontSize: '5rem' }}>Why this matters</h1>
                <p className='lead'>
                    Switching to a vegetarian diet can be a transformative journey for
                    both your body and mind. By embracing a diet rich in fruits, vegetables,
                    whole grains, and plant-based proteins, you can naturally reduce your
                    calorie intake while still feeling full and satisfied, helping you
                    shed unwanted pounds without the feeling of deprivation that often
                    accompanies other diets. Our mission is to empower our users with what
                    they need to accomplish their health goals, one veggie at a time!
                </p>
            </div>
            <Footer />
        </div>
    )
}