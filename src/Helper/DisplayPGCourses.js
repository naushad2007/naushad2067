import React, { Component } from 'react';
import pg_courses from '../component/Data/PGCourses.js';

//this.displayPGCourses() = this.displayPGCourses.bind(this);
function displayPGCourses() {
   
    let optionPGCourses = Object.keys(pg_courses).map(item =>
        //console.log(pg_courses)
        <option key={pg_courses[item]} value={pg_courses[item]}>{pg_courses[item]}</option>
        )
        //console.log(optionPGCourses);
        return(optionPGCourses)
}
export default displayPGCourses;