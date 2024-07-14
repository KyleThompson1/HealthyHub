import '../../App.css';
import dishImage from '../../Images//Misc/Profile Pic.jpg';


export const TeacherList = () => {

    const teachers = [
        {
            image: dishImage,
            name: "Dish 1",
            duration: '1 Hour',
            cost: '100',
        },
        {
            image: dishImage,
            name: "Dish 1",
            duration: '1 Hour',
            cost: '100',
        },
        {
            image: dishImage,
            name: "Dish 1",
            duration: '1 Hour',
            cost: '100',
        },
        {
            image: dishImage,
            name: "Dish 1",
            duration: '1 Hour',
            cost: '100',
        },
    ]

    return (
        <div className='teacher--list'>
            <div className="list--header">
                <h2>Notifications</h2>
                <select>
                    <option value='english'>English</option>
                    <option value='spanish'>Spanish</option>
                </select>
            </div>
            <div className="list--container">
                {teachers.map((teacher) => (
                    <div className='list'>
                        <div className='teacher--detail'>
                            <img className='list-img-pic' src={teacher.image} alt={teacher.name} />
                            <h2>{teacher.name}</h2>
                        </div>
                        <span>{teacher.duration}</span>
                        <span>${teacher.cost}/hr.</span>
                        <span className='teacher--todo'>:</span>
                    </div>
                ))}
            </div>
        </div>

    )
}