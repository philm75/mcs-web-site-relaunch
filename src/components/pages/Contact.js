import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import TextInputGroup from '../layout/InputTextGroup';
import TextAreaInputGroup from '../layout/InputTextAreaGroup';

import { CompanyDetails } from '../common/CompanyDetails';

class ContactPage extends Component {

    state = {
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

      const { yourName, yourEmail, yourPhoneNumber, yourMessage, } = this.state;
      
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
      
      // TODO fire email....
    }

    render() {
      const { companyName, addressLine1, addressLine2, postalCode, telephoneNo, emailAddress } = this.props;
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
                    <div className="col-sm-8">                
                        <form onSubmit={this.onSubmit} noValidate>
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
                                <TextInputGroup label="Company Name (optional)"
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
                                                type="tel"
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
                          <div className="row mb-3">
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
                      </address>
                      <address>
                        <abbr title="Phone">P:</abbr>
                        {telephoneNo}
                        <br />
                        <abbr title="Email">E:</abbr>
                        <a href={emailTo}>{emailAddress}</a>
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
  emailAddress: CompanyDetails.emailAddress
};
    
ContactPage.propTypes = {
  companyName: PropTypes.string.isRequired,
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  telephoneNo: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default withRouter(ContactPage);