import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.contact.name;
      var description= this.props.data.contact.description;
    }

    return (
      <header id="resume.home">
         <div id="top" className="jumbotron" data-position="center right">
            <div className="container">
               <h1>{name}</h1>
               <p className="lead">{description}</p>
            </div>            
            <div className="overlay"></div>            
            <a href="#profile" className="scroll-down">	
               <span className="glyphicon glyphicon-chevron-down"></span>
            </a>
         </div>
         <nav className="navbar navbar-default" id="navbar-example" role="navigation">
            <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
               </button>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
               <ul className="nav navbar-nav">
                  <li className="active"><a href="#profile">Profile</a></li>
                  <li><a href="#Experience">Experience</a></li>
                  <li><a href="#abilities">Abilities</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>
            </div>
         </nav>
      </header>
    );
  }
}

export default Header;
