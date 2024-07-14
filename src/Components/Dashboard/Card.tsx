import React, { useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { RiRestaurantLine } from 'react-icons/ri';
import { Modal, Button } from 'react-bootstrap';
import { Recipes } from '../Recipes/Recipes';
import '../../App.css';

// Define a type for the course object
type Course = {
    title: string;
    icon: JSX.Element;
    content: string;
};

export const Card: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [fetchNewRecipe, setFetchNewRecipe] = useState<() => void>(() => {});

    const courses: Course[] = [
        {
            title: 'Search for Recipes',
            icon: <RiRestaurantLine />,
            content: 'Here are some great recipes...',
        },
        {
            title: 'Search for Workouts',
            icon: <FaDumbbell />,
            content: 'Here are some great workouts...',
        },
    ];

    const handleShow = (course: Course) => {
        setSelectedCourse(course);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedCourse(null); // Reset selectedCourse to null
    };

    return (
        <div className='card--container'>
            {courses.map((item) => (
                <div className='card card-dashboard' onClick={() => handleShow(item)} key={item.title}>
                    <div className="card-cover">{item.icon}</div>
                    <div className="card-title lilita-one-regular">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}

            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="lilita-one-regular center-modal-title">{selectedCourse?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="lilita-one-regular">
                    {selectedCourse?.title === 'Search for Recipes' ? (
                        <Recipes fetchNewRecipe={fetchNewRecipe} />
                    ) : (
                        selectedCourse?.content
                    )}
                </Modal.Body>
                <Modal.Footer className="lilita-one-regular" style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Button variant="success" onClick={() => fetchNewRecipe()}>
                        Next Recipe
                    </Button>

                    <Button variant="success" onClick={handleClose}>
                        Save to Favorites
                    </Button>

                    <Button variant="danger" onClick={handleClose}>
                        Back to Dashboard
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
