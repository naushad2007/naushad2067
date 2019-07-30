import React, { Component } from 'react';
import work_location from '../component/Data/WorkLocation';

function displayWorkLocation() {
   
    let optionWorkLocation = Object.keys(work_location).map(item =>
        //console.log(pg_courses)
        <option key={work_location[item]} value={work_location[item]}>{work_location[item]}</option>
        )
        //console.log(optionPGCourses);
        return(optionWorkLocation)
}
export default displayWorkLocation;