import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

class ServicesPage extends Component {

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="mt-4 text-center">Services we provide</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>Our software design &amp; development services solve business problems, help businesses grow and succeed.  Our software solutions are productive, engaging and robust that modern businesses demand.  We build the right solutions with modern technologies, architectures, frameworks and tools.</p>
                        <p>We have developed cutting edge software solutions for private and public sector organisations such as the European Patent Office, Nissan Motor Manufacturing and the Marine Management Organisation.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="about-move">
                            <div className="services-details">
                                <div className="single-services">
                                    <a className="services-icon" href="#webappdev">
                                        <FontAwesomeIcon icon={faCode} />
                                    </a>
                                    <h4>Web Application <br />Development</h4>
                                    <p>
                                        We build custom web based applications that meet our clients specific business and technical requirements, our service offering is tailored to our clients needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="about-move">
                            <div className="services-details">
                                <div className="single-services">
                                    <a className="services-icon" href="#coder">
                                        <FontAwesomeIcon icon={faServer} />
                                    </a>
                                    <h4>Enterprise Software <br />Development</h4>
                                    <p>
                                        We will improve your software infrastructure with well-built microservices, reliable APIs, web services and database integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>                        
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="about-move">
                            <div className="services-details">
                                <div className="single-services">
                                    <a className="services-icon" href="#coder">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </a>
                                    <h4>Database <br />Development</h4>
                                    <p>
                                        We specialise in designing and creating custom databases that drive business efficiency and help scale your business.  These databases can be cloud based, local or centralised systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment> 
        );
    }
}
     
export default withRouter(ServicesPage);