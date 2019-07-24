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
import Qualification from './component/Qualification/QualificationDetails/QualificationDetails';
import WorkPreference from './component/WorkPreference/WorkPreference';
import InformationBox from './component/InformationBox/InformationBox';
import Template from './component/Template/Template';
import Button from './component/Button/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      email: '',
      password: ''
    };

    this.onValueChanged = this.onValueChanged.bind(this);
  }
  
  componentDidMount() {
  }

  onValueChanged(event){
    if(event.target.classList.contains('email')){
      console.log(event.target.value);
      this.setState({email:event.target.value});
    }
      
  }

  render() {

    return(
      <div>
          <Header/>
        <div className="body">
          <div className="left-sec">
            <InformationBox/>
            <LoginDetails state={this.state} onValueChanged={this.onValueChanged} />
            <HighestDegree/>
            <Qualification/>
            <Class12/>
            <CertificateCourse/>
            <WorkPreference/>
            <PersonalDetails/>
            <MailerSettings/>
            <Button/>
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