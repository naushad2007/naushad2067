import './App.css'
import React, { Component } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HighestDegree from './component/HighestDegree/HighestDegree';
import CertificateCourse from './component/CertificateCourses/CertificateCourses';
import Class12 from './component/Class12/Class12';
import LoginDetails from './component/LoginDetails/LoginDetails';
import MailerSettings from './component/MailerSettings/MailerSettings';
import PersonalDetails from './component/PersonalDetails/PersonalDetails';
import Qualification from './component/Qualification/Qualification';
import WorkPreference from './component/WorkPreference/WorkPreference';
import InformationBox from './component/InformationBox/InformationBox';
import Template from './component/Template/Template';
import Button from './component/Button/Button';
import { qualifiedTypeIdentifier } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      email: '',
      password: '',
      cpassword: '',

      highestDegree: 'Graduation / Bachelors Degree or Equivilant',

      docDegreeType: '',
      docCollege: '',
      docBranch: '',
      docSpecilization: '',
      docPassingMonth: '',
      docPassingYear: '',
      docGradingScheme: '',
      docMarks: '',
      docAchievement: '',

      pgDegreeType: '',
      pgCollege: '',
      pgBranch: '',
      pgSpecilization: '',
      pgPassingMonth: '',
      pgPassingYear: '',
      pgGradingScheme: '',
      pgMarks: '',
      pgAchievement: '',

      ugDegreeType: '',
      ugCollege: '',
      ugBranch: '',
      ugSpecilization: '',
      ugPassingMonth: '',
      ugPassingYear: '',
      ugGradingScheme: '',
      ugMarks: '',
      ugAchievement: '',

      board12: '',
      marks12: '',
      year12: '',
      medium12: '',
      englishMarks12: '',
      mathsMarks12: '',

      board10: '',
      marks10: '',
      year10: '',
      medium10: '',
      englishMarks10: '',
      mathsMarks10: '',

      certificateCourse: '',
      courseTimeMonth: '',
      courseTimeYear: '',

      workingType: '',
      workingDate: '',
      workingMonth: '',
      workingYear: '',
      workingLocation: '',

      name: '',
      dob: '',
      mobile: '',
      std: '',
      telephone: '',
      homeCity: '',
      homeState: '',
      currentCity: '',
      currentState: '',
      gender: '',

      jobAlerts: true,
      voiceAlerts: true,
      contactRecruiter: true,
      partnerMails: true,
      promotions: true,

      nameQualification: ''
    };

    this.onValueChanged = this.onValueChanged.bind(this);
  }
  
  componentDidMount() {
  }

  onValueChanged(event){
    if(event.target.classList.contains('email')){
      console.log(event.target.value);
      this.setState({email:event.target.value});
    } else if(event.target.classList.contains('passwd')) {
      console.log(event.target.value);
      this.setState({password:event.target.value});
    } else if(event.target.classList.contains('cpasswd')) {
      console.log(event.target.value);
      this.setState({cpassword:event.target.value});
    } else if(event.target.classList.contains('highest-degree')) {
      this.setState({highestDegree:event.target.value});
    } 
    
    else if(event.target.classList.contains('docFullTime')) {
      console.log(event.target.value);
      this.setState({docDegreeType:event.target.value});
    } else if(event.target.classList.contains('docPartTime')) {
      console.log(event.target.value);
      this.setState({docDegreeType:event.target.value});
    } else if(event.target.classList.contains('docCorrespondence')) {
      console.log(event.target.value);
      this.setState({docDegreeType:event.target.value});
    } else if(event.target.classList.contains('college_doc')) {
      console.log(event.target.value);
      this.setState({docCollege:event.target.value});
    } else if(event.target.classList.contains('doc_type')) {
      console.log(event.target.value);
      this.setState({docBranch:event.target.value});
    } else if(event.target.classList.contains('specilization-doctorate')) {
      console.log(event.target.value);
      this.setState({docSpecilization:event.target.value});
    } else if(event.target.classList.contains('docTimeMonth')) {
      console.log(event.target.value);
      this.setState({docPassingMonth:event.target.value});
    } else if(event.target.classList.contains('docTimeYear')) {
      console.log(event.target.value);
      this.setState({docPassingYear:event.target.value});
    } else if(event.target.classList.contains('grading_scheme_doc')) {
      console.log(event.target.value);
      this.setState({docGradingScheme:event.target.value});
    } else if(event.target.classList.contains('doctorate-marks')) {
      console.log(event.target.value);
      this.setState({docMarks:event.target.value});
    } else if(event.target.classList.contains('achievement_doc')) {
      console.log(event.target.value);
      this.setState({docAchievement:event.target.value});
    } 
    
    else if(event.target.classList.contains('class12-marks')) {
      console.log(event.target.value);
      this.setState({marks12:event.target.value});
    } else if(event.target.classList.contains('passout-year-12')) {
      console.log(event.target.value);
      this.setState({year12:event.target.value});
    } else if(event.target.classList.contains('class12_medium')) {
      console.log(event.target.value);
      this.setState({medium12:event.target.value});
    } else if(event.target.classList.contains('class12_board')) {
      console.log(event.target.value);
      this.setState({board12:event.target.value});
    } else if(event.target.classList.contains('class12_marks_math')) {
      console.log(event.target.value);
      this.setState({mathsMarks12:event.target.value});
    } else if(event.target.classList.contains('class12_marks_english')) {
      console.log(event.target.value);
      this.setState({englishMarks12:event.target.value});
    } else if(event.target.classList.contains('certi_course')) {
      console.log(event.target.value);
      this.setState({certificateCourse:event.target.value});
    } else if(event.target.classList.contains('course_time_month')) {
      console.log(event.target.value);
      this.setState({courseTimeMonth:event.target.value});
    }  else if(event.target.classList.contains('course_time_year')) {
      console.log(event.target.value);
      this.setState({courseTimeYear:event.target.value});
    } else if(event.target.classList.contains('wp_fulltime')) {
      console.log(event.target.value);
      this.setState({workingType:"Full time"});
    } else if(event.target.classList.contains('wp_parttime')) {
      console.log(event.target.value);
      this.setState({workingType:"Part Time"});
    } else if(event.target.classList.contains('wp_internship')) {
      console.log(event.target.value);
      this.setState({workingType:"Internship"});
    } else if(event.target.classList.contains('wp_immediately')) {
      console.log(event.target.value);
      this.setState({workingDate:"Immediately"});
    } else if(event.target.classList.contains('wp_provide_time')) {
      console.log(event.target.value);
      this.setState({workingDate:"From"});
    } else if(event.target.classList.contains('wp_joining_year')) {
      console.log(event.target.value);
      this.setState({workingMonth:event.target.value});
    } else if(event.target.classList.contains('wp_joining_month')) {
      console.log(event.target.value);
      this.setState({workingYear:event.target.value});
    } else if(event.target.classList.contains('location')) {
      console.log(event.target.value);
      this.setState({workingLocation:event.target.value});
    } else if(event.target.classList.contains('name')) {
      console.log(event.target.value);
      this.setState({name:event.target.value});
    } else if(event.target.classList.contains('gender_female')) {
      console.log(event.target.value);
      this.setState({gender:"Female"});
    } else if(event.target.classList.contains('gender_male')) {
      console.log(event.target.value);
      this.setState({gender:"Male"});
    } else if(event.target.classList.contains('dob')) {
      console.log(event.target.value);
      this.setState({dob:event.target.value});
    } else if(event.target.classList.contains('mob')) {
      console.log(event.target.value);
      this.setState({mobile:event.target.value});
    } else if(event.target.classList.contains('std')) {
      console.log(event.target.value);
      this.setState({std:event.target.value});
    } else if(event.target.classList.contains('telephone')) {
      console.log(event.target.value);
      this.setState({telephone:event.target.value});
    } else if(event.target.classList.contains('job_alerts')) {
      console.log(this.state.jobAlerts);
      this.setState(prevState => ({jobAlerts:!prevState.jobAlerts}));
    } else if(event.target.classList.contains('voice_alerts')) {
      console.log(this.state.voiceAlerts);
      this.setState(prevState => ({voiceAlerts:!prevState.voiceAlerts}));
    } else if(event.target.classList.contains('contact_recruiter')) {
      console.log(this.state.contactRecruiter);
      this.setState(prevState => ({contactRecruiter:!prevState.contactRecruiter}));
    } else if(event.target.classList.contains('partner_mails')) {
      console.log(this.state.partnerMails);
      this.setState(prevState => ({partnerMails:!prevState.partnerMails}));
    } else if(event.target.classList.contains('promotions')) {
      console.log(this.state.promotions);
      this.setState(prevState => ({promotions:!prevState.promotions}));
    } 
  }

  render() {

    return(
      <div>
          <Header/>
        <div className="body">
          <div className="left-sec">
            {/* <InformationBox/> */}
            <LoginDetails state={this.state} onValueChanged={this.onValueChanged} />
            <HighestDegree state={this.state} onValueChanged={this.onValueChanged} />
            <Qualification id="doc" className="doc" state={this.state} onValueChanged={this.onValueChanged} />
            <Class12 state={this.state} onValueChanged={this.onValueChanged} />
            <CertificateCourse state={this.state} onValueChanged={this.onValueChanged} />
            <WorkPreference state={this.state} onValueChanged={this.onValueChanged} />
            <PersonalDetails state={this.state} onValueChanged={this.onValueChanged} />
            <MailerSettings state={this.state} onValueChanged={this.onValueChanged} />
            <Button state={this.state} onValueChanged={this.onValueChanged} />
          </div>
          <div className="right-sec">
            <Template {...this.state}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;