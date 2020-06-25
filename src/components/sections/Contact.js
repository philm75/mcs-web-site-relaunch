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
      name: '',
      phoneNumber: '',
      companyName: '',
      message: '',
      email: '',
      errors: {}  
    };
    
    onChange = event => this.setState({ [event.target.name]: event.target.value });
    
    onSubmit = (event) => {
      event.preventDefault();

      this.setState({errors: {}});

      const { name, email, phoneNumber, message, companyName } = this.state;
      
      if (name === '') {
        this.setState({ errors: { name: 'Your Name is required' } });
        return;
      }

      if (phoneNumber === '') {
        this.setState({ errors: { phoneNumber: 'Your Phone Number is required' } });
        return;
      }

      if (email === '') {
        this.setState({ errors: { email: 'Your Email Address is required' } });
        return;
      }

      if (message === '') {
        this.setState({ errors: { message: 'Your Message is required' } });
        return;
      }
      
      const data = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: {
          email : email,        
          subject : 'Contact us notification', 
          name: name,
          message: message,
          phoneNumber: phoneNumber,
          companyName: companyName
        }
      }
      
      axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then((response) => {
        this.setState({
          mailSent: 'Your message has been sent successfully.',
          name: '',
          phoneNumber: '',
          companyName: '',
          message: '',
          email: '',
          errors: {}  
        });
      }).catch((error) => {
        this.setState({
          mailSent: 'Unable to send your message, please contact us by phone or email.',
          name: '',
          phoneNumber: '',
          companyName: '',
          message: '',
          email: '',
          errors: {}  
        });
      });
    }

    renderMessage() {
      const divStyle = {        
        backgroundColor: '#f9f9f9',
        borderColor: '#f9f9f9'
      }

      return (
        <div className="row">
          <div className="col-sm-8 alert alert-light" role="alert" style={divStyle}>
            <strong>
              {this.state.mailSent}
            </strong>
          </div>
        </div>        
      )
    }

    render() {
      const { telephoneNo, emailAddress, displayEmailAddress } = this.props;
      const { name, companyName, phoneNumber, email, message, errors, mailSent } = this.state;
      const emailTo = 'mailTo:' + emailAddress;

      return (
        <div id="contact" className="about-area area-padding">
            <div className="container">
                <PageHeader name={'Contact Us'} />
                <div className="row">
                    <div className="col-sm-12">
                      <p>
                        Thank you for your interest in our services.  Please fill out the form below or e-mail us and we will get back to you promptly regarding your request.
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
                                                name="name"
                                                placeholder="Enter your name"
                                                value={name}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.name} />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">                          
                                <TextInputGroup label="Company Name"
                                                name="companyName"
                                                placeholder="Enter your company name"
                                                value={companyName}
                                                required={false}
                                                onChange={this.onChange}
                                                error={errors.companyName} />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <TextInputGroup label="Phone No."
                                                name="phoneNumber"
                                                placeholder="Enter your phone no."
                                                value={phoneNumber}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.phoneNumber} />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <TextInputGroup label="Email Address"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                value={email}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.email} /> 
                              </div>
                            </div>                            
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <TextAreaInputGroup label="Message"
                                                name="message"
                                                rows={4}
                                                placeholder="Enter your message"
                                                value={message}
                                                required={true}
                                                onChange={this.onChange}
                                                error={errors.message}/>                              
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3 float-right">
                            <div className="col-sm-12">
                              <input type="submit"value="SEND" className="btn btn-primary" />  
                            </div>
                          </div>
                          {mailSent && this.renderMessage()}                                                                                                                                                                                                                       
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