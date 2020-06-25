import React, { Component } from 'react';
import PropTypes from 'prop-types';

const links = [
    {name: 'Home', link: '#top', active: false},
    {name: 'About', link: '#about', active: false},
    {name: 'Services', link: '#services', active: false},
    {name: 'Contact', link: '#contact', active: false}
];

class Header extends Component {

    state = {
        headerLinks: [
            ...links
        ]
    }
 
    onLinkClick = (name) => {
        this.setState((prevState, props) => ({
            headerLinks: [
                ...prevState.headerLinks.map(headerLink => {
                    return {
                        name: headerLink.name, 
                        link: headerLink.link, 
                        active: (headerLink.name === name ? true : false)
                    }
                })                
            ] 
        }))
    }

    render() {
        const { branding} = this.props;
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex">    
                    <div className="logo mr-auto">
                        <h1>
                            <a href="index.html">
                                {branding}
                            </a>
                        </h1>
                    </div>    
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            {this.state.headerLinks.map((item, i) => (
                                <li key={i} className={item.active ? 'active' : null}>
                                    <a href={item.link} onClick={() => {this.onLinkClick(item.name)}}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>    
                </div>
            </header>
        )
    }    
}

Header.defaultProps = {
    branding: 'Merrilees Consultant Services'
};
      
Header.propTypes = {
    branding: PropTypes.string.isRequired
};
      
export default Header;