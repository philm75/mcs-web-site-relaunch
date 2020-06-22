import React from 'react';

import PageHeader from '../layout/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFileCode, faCloud } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

    return (
        <div id="services" className="services-area area-padding">
            <div className="container">                
                <PageHeader name={'Services we provide'} />
                <div className="row">
                    <div className="col-sm-12">
                        <p>Our development service solves business problems, help businesses grow and succeed.  Our software solutions are productive, engaging and robust that modern businesses demand.  We build the right solutions with modern technologies, architectures, frameworks and tools.</p>
                        <p>We have developed cutting edge software solutions for private and public sector organisations including the Department for Work and Pensions, the European Patent Office, Nissan Motor Manufacturing and the Marine Management Organisation.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div>
                            <div className="services-details">
                                <div className="single-services">
                                    <span className="services-icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>                                    
                                    <h4>Bespoke Software Development</h4>
                                    <p className="text-left">We build bespoke software solutions that meet our clients specific business and technical requirements, our service offering is tailored to our clients needs.</p>
                                    <p className="text-left">Whether they wish to enhance their business with a bespoke software solution or add extra functionality to the existing product, we will help.</p>
                                    <p className="text-left">Be it full-cycle software development or a legacy application upgrade, we will take care of everything, from analysis to project implementation and post implementation support.</p>
                                    <p className="text-left">We leverage our expertise in Java, Spring, NodeJS, Docker, relational and NoSQL databases to build robust software solutions from scratch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="about-move">
                            <div className="services-details">
                                <div className="single-services">
                                    <span className="services-icon">
                                        <FontAwesomeIcon icon={faFileCode} />
                                    </span>
                                    <h4>Web Application Development</h4>
                                    <p className="text-left">
                                        We deliver functional, accessible, and responsive HTML5/JavaScript applications that offer end users the perfect UX experience across desktops, smartphones, and tablets.
                                    </p>
                                    <p className="text-left">
                                        We can rework legacy applications and modernize unfriendly or old-fashioned web interfaces in order to align them with the evolving needs of end users and current technologies.
                                    </p>
                                    <p className="text-left">
                                        We use our expertise in JavaScript, TypeScript and knowledge of open-source front-end libraries and frameworks such as React and Angular.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>                        
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="about-move">
                            <div className="services-details">
                                <div className="single-services">
                                    <span className="services-icon">
                                        <FontAwesomeIcon icon={faCloud} />
                                    </span>
                                    <h4>Enterprise Software Development</h4>
                                    <p className="text-left">
                                        We will improve your software infrastructure with well-built microservices, reliable APIs, web services and messaging systems.   
                                    </p>
                                    <p className="text-left">
                                        We specialise in designing and creating custom databases that drive business efficiency and help scale your business.  These databases can be cloud based, local or centralised systems.                                        
                                    </p>                                    
                                    <p className="text-left">
                                        Using modern enterprise architecture standards, we utilize reliable cloud computing services to ensure data security, scalability and availability.
                                    </p>
                                    <p className="text-left">
                                    To guarantee 100% efficiency, we use the best cloud providers like AWS and Microsoft Azure to ensure your data is safe and can be easily accessed and managed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </div> 
    )
}
     
export default Services;