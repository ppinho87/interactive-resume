import React, { Component } from 'react';

class About extends Component {
   render() {

      if(this.props.data){
         var name = this.props.data.contact.name;
         var profilepic= "images/" + this.props.data.contact.image;
         var bio = this.props.data.contact.bio;
         var occupation = this.props.data.contact.occupation;
         var city = this.props.data.contact.address.city;
         var state = this.props.data.contact.address.state;
         var resume = this.props.data.contact.resumedownload;
      }

      return (
         <div className="background-white">
            <div id="profile" className="container">
               <h2>Profile</h2>
               <p className="lead">{occupation}</p>
               <hr/>
               <div className="row">
                  <div className="col-md-4">
                     <h3>About me</h3>
                     <p>{bio}</p>
                  </div>
                  <div className="col-md-4 text-center">
                     <img src={profilepic} alt="Paul Pinho" width="246" height="246" />
                  </div>
                  <div className="col-md-4">
                     <h3>Details</h3>
                     <p>
                        <strong>Name:</strong><br/>{name}<br/>
                        <strong id="age"></strong>
                        <strong>Location:</strong><br/>{city}, {state}
                     </p>
                  </div>						
               </div>
               <div className="text-center project-referal">
                  <a id="resumeDownload" href={resume} className="btn btn-primary">
                     <i className="fa fa-download"></i>&nbsp;Download Resume
                  </a>
               </div>
            </div>	
         </div>
      );
   }
}

export default About;
