import { ProfileHeader } from "./ProfileHeader";
import profilePic from '../../Images/Misc/Profile Pic.jpg';
import { BiBook } from 'react-icons/bi';
import '../../App.css';

export const Profile = () => {

    const courses = [
        {
            title: 'English',
            duration: '2 Hours',
            icon: <BiBook />
        },
        {
            title: 'English',
            duration: '2 Hours',
            icon: <BiBook />
        },
        {
            title: 'English',
            duration: '2 Hours',
            icon: <BiBook />
        }
    ];

    return (
        <div className='profile'>
            <ProfileHeader />

            <div className='user--profile'>
                <div className="user--detail">
                    <img src={profilePic} alt='Profile' />
                    <h3 className='username'>Kyle Thompson</h3>
                    <span className='profession'>Teacher</span>
                </div>

                <div className="user-courses">
                    {courses.map((course, index) => (
                        <div className='course' key={index}>
                            <div className="course-detail">
                                <div className="course-cover">{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};