import React from 'react';
import PageHeader from '../layout/PageHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const yearsExp = new Date().getFullYear() - 2011;
    return (
        <div id="about" className="about-area area-padding">
            <div className="container">
                <PageHeader name={'What We Do'} />
                <div className="row">
                    <div className="col-sm-12">
                        <div className="well-middle">
                            <div className="single-well">                            
                                <p>We provide bespoke software development as a service to clients, specialising in developing software solutions.  Our software solutions enable clients to streamline processes, gain a competitive advantage or allow them to connect with customers and business partners.</p>
                                <p>Our software solutions meet our clients needs, help generate revenue streams, on time and to budget.  Our software development as a service offering includes:-</p>
                                <ul>
                                    <li>
                                        <span><FontAwesomeIcon icon={faCheck} /></span> Bespoke Software Development 
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faCheck} /></span> Web Application Development
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faCheck} /></span>  Enterprise Software Development
                                    </li>
                                </ul>                        
                                <h3 className="mt-4 text-center">About Us</h3>
                                <p>Merrilees Consultant Services Ltd was founded in 2011, based in the north east of England.  Over {yearsExp} years we have been providing IT consulting and bespoke software development services to UK and international companies in the private and public sectors.</p>
                                <p>
                                    <a href="#contact" className="btn btn-primary btn-lg">
                                        GET A QUOTE
                                    </a>
                                </p>                            
                            </div> 
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}
     
export default About;