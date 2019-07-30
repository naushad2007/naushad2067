import React, { Component } from 'react';
import './MailerSettings.scss';

class MailerSettings extends Component {

    render() {
        return (
            <div className="border-box">
                <h4>Mailer Setting</h4>
                <hr className='hr-solid'/>
                <p className='mailer-paragraph'>Firstnaukri.com will send newsletters and tips from time to time. Please choose the mailers that you wish to receive.</p>
                <div className='mailer'>
                    <form>
                        <input id="mailer_option1" type="checkbox" className="job_alerts" name="option1" value={this.props.jobAlerts} onChange={this.props.onValueChanged}/>Job Alerts and Products Updates<br/>
                        <input id="mailer_option2" type="checkbox" className="voice_alerts" name="option2" value={this.props.voiceAlerts} onChange={this.props.onValueChanged}/>Automated Voice Alerts<br/>
                        <input id="mailer_option3" type="checkbox" className="contact_recruiter" name="option3" value={this.props.contactRecruiter} onChange={this.props.onValueChanged}/>SMS Contacts by Recruiters<br/>
                        <input id="mailer_option4" type="checkbox" className="partner_mails" name="option4" value={this.props.partnerMails} onChange={this.props.onValueChanged}/>Mails from Partner Sites of firstnaukri.com<br/>
                        <input id="mailer_option5" type="checkbox" className="promotions" name="option5" value={this.props.promotions} onChange={this.props.onValueChanged}/>Other Promotional and Special Offers<br/>
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