import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import TextInputGroup from '../layout/InputTextGroup';
import TextAreaInputGroup from '../layout/InputTextAreaGroup';
import PageHeader from '../layout/PageHeader';

import { CompanyDetails } from '../common/CompanyDetails';

class ContactPage extends Component {

    state = {
      mailSent: '',      
      yourName: '',
      yourPhoneNumber: '',
      yourCompanyName: '',
      yourMessage: '',
      yourEmail: '',
      errors: {}  
    };
    
    onChange = event => this.setState({ [event.target.name]: event.target.value });
    
    onSubmit = (event) => {
      event.preventDefault();

      this.setState({errors: {}});

      const { yourName, yourEmail, yourPhoneNumber, yourMessage, yourCompanyName } = this.state;
      
      if (yourName === '') {
        this.setState({ errors: { yourName: 'Your Name is required' } });
        return;
      }

      if (yourPhoneNumber === '') {
        this.setState({ errors: { yourPhoneNumber: 'Your Phone Number is required' } });
        return;
      }

      if (yourEmail === '') {
        this.setState({ errors: { yourEmail: 'Your Email Address is required' } });
        return;
      }

      if (yourMessage === '') {
        this.setState({ errors: { yourMessage: 'Your Message is required' } });
        return;
      }
      
      axios({
        method: 'post',
        url: 'http://localhost:3000/php/mailer.php',
        headers: { 'content-type': 'application/json' },
        data: {
          name: yourName,
          email: yourEmail,
          message: yourMessage,
          phoneNumber: yourPhoneNumber,
          companyName: yourCompanyName
        }
      }).then(result => {
        this.setState({
          mailSent: result.data.sent,
          yourName: '',
          yourPhoneNumber: '',
          yourCompanyName: '',
          yourMessage: '',
          yourEmail: '',
          errors: {}  
        });
      }).catch(error => {
        this.setState({error: error.message});
      });
    }

    render() {
      const { telephoneNo, emailAddress, displayEmailAddress } = this.props;
      const { yourName, yourCompanyName, yourPhoneNumber, yourEmail, yourMessage, errors } = this.state;
      const emailTo = 'mailTo:' + emailAddress;

      return (
        <div id="contact" className="about-area area-padding">
            <div className="container">
                <PageHeader name={'Contact Us'} />
                <div className="row">
                    <div className="col-sm-12">
                      <p>
                        Thank you for your interest in our services. Please fill out the form below or e-mail us and we will get back to you promptly regarding your request.
                      </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h4 className="mt-4">Send us a message</h4>
                    </div>
                    <div className="col-sm-4">
                      <h4 className="mt-4">Contact</h4>
                    </div>                
                </div>
                <div className="row mb-4">
                    <div className="col-sm-8 pt-3" style={{backgroundColor: "#f9f9f9"}}>                
                        <form onSubmit={this.onSubmit} noValidate method='POST' action='mailer.php'>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <TextInputGroup label="Name"
                                                name="yourName"
                                                placeholder="Enter your name"
                                                value={yourName}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.yourName} />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">                          
                                <TextInputGroup label="Company Name"
                                                name="yourCompanyName"
                                                placeholder="Enter your company name"
                                                value={yourCompanyName}
                                                required={false}
                                                onChange={this.onChange}
                                                error={errors.yourCompanyName} />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <TextInputGroup label="Phone No."
                                                name="yourPhoneNumber"
                                                placeholder="Enter your phone no."
                                                value={yourPhoneNumber}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.yourPhoneNumber} />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <TextInputGroup label="Email Address"
                                                name="yourEmail"
                                                type="email"
                                                placeholder="Enter your email address"
                                                value={yourEmail}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.yourEmail} /> 
                              </div>
                            </div>                            
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <TextAreaInputGroup label="Message"
                                                name="yourMessage"
                                                rows={4}
                                                placeholder="Enter your message"
                                                value={yourMessage}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.yourMessage}/>                              
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3 float-right">
                            <div className="col-sm-12">
                              <input type="submit"value="SEND" className="btn btn-primary" />  
                            </div>
                          </div>                                                                                                                                                                                              
                        </form>
                    </div>
                    <div className="col-sm-4">
                      <address>
                        <strong>By Phone</strong>   
                        <br />                     
                        {telephoneNo}
                      </address>
                      <address>
                        <strong>By Email</strong>
                        <br />
                        <a href={emailTo}>{'  '}{displayEmailAddress}</a>
                      </address>                      
                    </div>
                </div>
            </div>
          </div>    
        );
    }
}

ContactPage.defaultProps = {
  telephoneNo: CompanyDetails.telephoneNo,
  emailAddress: CompanyDetails.emailAddress,
  displayEmailAddress: CompanyDetails.displayEmailAddress
};
    
ContactPage.propTypes = {
  telephoneNo: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  displayEmailAddress: PropTypes.string.isRequired
};

export default ContactPage;