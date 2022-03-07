import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import Brandicon from './iconText';

import propTypes from 'prop-types';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathName == path ? ' active' : '';
  };
  return (
    <Fade>
      <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Brandicon />

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item${getNavLinkClass('/')}`}>
                    <Button className="nav-Link" type="link" href="">
                      Home
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass('/browse-by')}`}>
                    <Button className="nav-Link" type="link" href="/browse-by">
                      Browse By
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass('/stories')}`}>
                    <Button className="nav-Link" type="link" href="/stories">
                      Stories
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass('/agents')}`}>
                    <Button className="nav-Link" type="link" href="/agents">
                      Agents
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
    </Fade>
  );
}

Header.propTypes = {
  location: propTypes.object,
};
