import React, { Component } from 'react';
import ug_courses from '../component/Data/UGCourses.js';

function displayUGCourses() {
   
    let optionUGCourses = Object.keys(ug_courses).map(item =>
        //console.log(pg_courses)
        <option key={ug_courses[item]} value={ug_courses[item]}>{ug_courses[item]}</option>
        )
        //console.log(optionPGCourses);
        return(optionUGCourses)
}
export default displayUGCourses;