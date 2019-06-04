import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import PageHeader from '../layout/PageHeader';

const HomePage = props => {
    const yearsExp = new Date().getFullYear() - 1996;
    return (
        <Fragment>
            <PageHeader name={'What We Do'} />
            <div className="row">
                <div className="col-sm-12">
                    <p>We provide custom software development as a service to clients, specialising in developing custom software solutions for clients in a wide range of business sectors.  We build software solutions that streamline processes, enable a competitive advantage or allow you to connect with customers and business partners.</p>
                    <p>Our custom software solutions meet our clients needs, help generate revenue streams, on time and to budget.</p>
                    <h2 className="mt-4 text-center">About Us</h2>
                    <p>Merrilees Consultant Services Ltd was founded in 2011, based in the north east of England.  We have over {yearsExp} years experience providing IT consulting and bespoke software development services to UK and international companies in the private and public sectors.</p>
                    <p>
                        <Link to="/Contact" className="btn btn-primary btn-lg">
                            Contact us now
                        </Link>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
     
export default withRouter(HomePage);