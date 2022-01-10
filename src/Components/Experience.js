import React, { Component } from 'react';

class Experience extends Component {
  render() {
    if(this.props.data){
      var quote = this.props.data.quotes.experienceSection.quote;
      var author = this.props.data.quotes.experienceSection.author;
      var source = this.props.data.quotes.experienceSection.source;
      var thesis = this.props.data.contact.thesisdownload;
      
      var education = this.props.data.resume.education.map(function(education){
        return <div key={education.school} className="Experience row">
          <div className="col-md-4">
            <h4>{education.school}</h4>
            <p className="Experience-period">{education.graduated}</p>
          </div>
          <div className="col-md-8">
            <p><strong>{education.degree}</strong>
              <span className="hidden-phone">{education.description}</span>
              <span className="Experience-details">
                <span className="location">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  {education.location}					
                </span>
              </span>
            </p>
          </div>
        </div>
      })
      
      var work = this.props.data.resume.work.map(function(work){
        return <div key={work.company} className="Experience row">
          <div className="col-md-4">
            <h4>{work.company}</h4>
            <p className="Experience-period">{work.years}</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>{work.title}</strong>
              <span className="hidden-phone">{work.description}</span>
              <span className="Experience-details">
                <span className="location">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  {work.location}
                </span>		
              </span>
            </p>
          </div>
        </div>
      })
    }

    return (
      <div id="Experience" className="container">			
        <h2>Experience</h2>          
        <p className="lead">&ldquo;{quote}&rdquo;<br/>- {author}, {source}</p><hr/>
        <h3>Education</h3>
        <div className="Experience">
          {education}
        </div>
        <div className="text-center project-referal">
          <a id="thesisDownload" href={thesis} className="btn btn-primary">
              <i className="fa fa-download"></i>&nbsp;Download Thesis
          </a>
        </div><hr/>
        <h3>Careers</h3>
        <div className="Experience">					
          {work}
        </div>
      </div>
    );
  }
}

export default Experience;
