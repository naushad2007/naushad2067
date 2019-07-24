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
import Button from './component/Button/Button';
class App extends Component {
  componentDidMount() {
  }

  render() {
    return(
      <div className="page">
          <Header/>
        <div className="body">
          <div className="left-sec">
            <InformationBox/>
            <LoginDetails/>
            <HighestDegree/>
            <Qualification id="Doctorate"/>
            <Qualification id="Post_Graduation"/>
            <Qualification id="Graduation"/>
            <Class12/>
            <CertificateCourse/>
            <WorkPreference/>
            <PersonalDetails/>
            <MailerSettings/>
            <Button/>
          </div>

          {/* <div className="right-sec">
              <div>
                <selectTemplate/>
              </div>
              <div>
                <Template/>
              </div>
          </div> */}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;