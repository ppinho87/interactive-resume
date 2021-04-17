import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks = this.props.data.contact.social.map(function(network){
        return <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2018 Paul Pinho</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
