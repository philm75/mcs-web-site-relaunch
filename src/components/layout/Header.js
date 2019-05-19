import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import HeaderLink from './HeaderLink';

const Header = props => {
    const { branding, location } = props;
    const { pathname } = location;

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link to="/Home" className="navbar-brand">
                        {branding}
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <HeaderLink currentPath={pathname} name="Home" link="/Home"/>
                            <HeaderLink currentPath={pathname} name="Services" link="/Services"/>
                            <HeaderLink currentPath={pathname} name="Portfolio" link="/Portfolio"/>
                            <HeaderLink currentPath={pathname} name="Contact" link="/Contact"/>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
    
Header.defaultProps = {
    branding: 'Merrilees Consultant Services'
};
      
Header.propTypes = {
    branding: PropTypes.string.isRequired
};
      
export default withRouter(Header);