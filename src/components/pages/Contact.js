import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import TextInputGroup from '../layout/InputTextGroup';
import TextAreaInputGroup from '../layout/InputTextAreaGroup';

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
      const { companyName, addressLine1, addressLine2, postalCode, telephoneNo, emailAddress, displayEmailAddress } = this.props;
      const { yourName, yourCompanyName, yourPhoneNumber, yourEmail, yourMessage, errors } = this.state;
      const emailTo = 'mailTo:' + emailAddress;

      return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="mt-4">Contact Us</h2>
                        <p>For more information on our services please do not hestitate to contact us.</p>                            
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h3 className="mt-4">Send us a message</h3>
                    </div>
                    <div className="col-sm-4">
                      <h3 className="mt-4">Contact Information</h3>
                    </div>                
                </div>
                <div className="row">
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
                              <input type="submit"value="Send" className="btn btn-primary" />  
                            </div>
                          </div>                                                                                                                                                                                              
                        </form>
                    </div>
                    <div className="col-sm-4">
                      <strong>{companyName}</strong>
                      <br />
                      <address>
                        {addressLine1}
                        <br />
                        {addressLine2}
                        <br />
                        {postalCode}
                        <br />
                        <FontAwesomeIcon icon={faPhone} />{'  '}{telephoneNo}
                      </address>
                      <address>
                        <strong>Email</strong>
                        <br />
                        <a href={emailTo}>{'  '}{displayEmailAddress}</a>
                      </address>                      
                    </div>
                </div>
            </Fragment>    
        );
    }
}

ContactPage.defaultProps = {
  companyName: CompanyDetails.companyName,
  addressLine1: CompanyDetails.addressLine1,
  addressLine2: CompanyDetails.addressLine2,
  postalCode: CompanyDetails.postalCode,
  telephoneNo: CompanyDetails.telephoneNo,
  emailAddress: CompanyDetails.emailAddress,
  displayEmailAddress: CompanyDetails.displayEmailAddress
};
    
ContactPage.propTypes = {
  companyName: PropTypes.string.isRequired,
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  telephoneNo: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  displayEmailAddress: PropTypes.string.isRequired
};

export default withRouter(ContactPage);