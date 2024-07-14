import React from "react";
import { ContentHeader } from "./ContentHeader";
import '../../App.css';
import { Card } from "./Card";
import { TeacherList } from "./TeacherList";

export const Content = () => {

    return (

        <div className='content'>
            <ContentHeader/>
            <Card/>
            <TeacherList/>
        </div>
    )
}