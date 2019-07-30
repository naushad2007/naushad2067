import React, { Component } from 'react';
import doc_courses from '../component/Data/DocCourses.js';

//this.displayPGCourses() = this.displayPGCourses.bind(this);
function displayDOCCourses() {
   
    let optionDOCCourses = Object.keys(doc_courses).map(item =>
        //console.log(pg_courses)
        <option key={doc_courses[item]} value={doc_courses[item]}>{doc_courses[item]}</option>
        )
        //console.log(optionPGCourses);
        return(optionDOCCourses)
}
export default displayDOCCourses;