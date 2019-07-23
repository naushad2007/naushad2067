import React, { Component } from 'react';

class MailerSettings extends Component {

    render() {
        return (
            <div>
                <h4>Mailer Setting</h4>
                <hr className='hr-solid'/>
                <p className='mailer-paragraph'>Firstnaukri.com will send newsletters and tips from time to time. Please choose the mailers that you wish to receive.</p>
                <div className='mailer'>
                    <form>
                        <input id="mailer_option1" type="checkbox" name="option1" value="jpAlerts" />Job Alerts and Products Updates<br/>
                        <input id="mailer_option2" type="checkbox" name="option2" value="vAlerts" />Automated Voice Alerts<br/>
                        <input id="mailer_option3" type="checkbox" name="option3" value="conRecruiters" />SMS Contacts by Recruiters<br/>
                        <input id="mailer_option4" type="checkbox" name="option4" value="mpsNaukri" />Mails from Partner Sites of firstnaukri.com<br/>
                        <input id="mailer_option5" type="checkbox" name="option5" value="psOffers" />Other Promotional and Special Offers<br/>
                    </form>
                </div>
                <p className='mailer-paragraph'>Save and proceed!</p>
                <div className='mailer'>
                    <form>
                        <input type="checkbox" name="termsandconditions" value="terms"/>I have read and I agree to the <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/termsAndConditions">terms and conditions</a> governing the use of firstnaukri.com<br/>
                    </form>
                </div>
            </div>
        );
    }
}
export default MailerSettings;