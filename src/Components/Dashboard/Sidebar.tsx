import { useState } from 'react';
import { BiHome, BiMessage, BiHelpCircle, BiDumbbell, 
         BiUser, BiCog, BiNews } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import '../../App.css';

export const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`menu ${isCollapsed ? 'collapsed' : ''}`}>
            <button className='toggle-button-sidebar' onClick={toggleSidebar}>
                {isCollapsed ? 'Expand Menu' : 'Condense Menu'}
            </button>

            <div className='menu--list'>
                <a href='#' className='item active'>
                    <BiHome className='icon' size={36} />
                    {!isCollapsed && 'Home'}
                </a>
                <a href='#' className='item'>
                    <FaLeaf className='icon' size={36} />
                    {!isCollapsed && 'Favorite Recipes'}
                </a>
                <a href='#' className='item'>
                    <BiDumbbell className='icon' size={36} />
                    {!isCollapsed && 'Favorite Workouts'}
                </a>
                <a href='#' className='item'>
                    <BiUser className='icon' size={36} />
                    {!isCollapsed && 'Friends'}
                </a>
                <a href='#' className='item'>
                    <BiMessage className='icon' size={36} />
                    {!isCollapsed && 'Message'}
                </a>
                <a href='#' className='item'>
                    <BiNews className='icon' size={36} />
                    {!isCollapsed && 'Newsfeed'}
                </a>
                <a href='#' className='item'>
                    <BiCog className='icon' size={36} />
                    {!isCollapsed && 'Settings'}
                </a>
                <a href='#' className='item'>
                    <BiHelpCircle className='icon' size={36} />
                    {!isCollapsed && 'Help'}
                </a>
            </div>
        </div>
    );
};
