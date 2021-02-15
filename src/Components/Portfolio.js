import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var quote = this.props.data.quotes.projectSection.quote;
      var author = this.props.data.quotes.projectSection.author;

      var projects = this.props.data.portfolio.projects.map(function(projects){
        var projectImage = 'images/' + projects.image;

        return <div key={projects.title} className="col-md-6 col-sm-12 col-xs-12">
          <figure className="effect">
            <img src={projectImage}/>					
            <figcaption>
              <h3>{projects.title}</h3>
              <p>{projects.description}</p>
              <p><strong>Tags:</strong> <br/>{projects.tags}</p>
              <a href={projects.url} target="_blank">View more</a>
              <span className="icon">
                <span className="glyphicon glyphicon-new-window"></span>
              </span>
            </figcaption> 
          </figure>
        </div>
      })
    }

    return (
      <div id="projects" className="container">
        <h2>Projects</h2>
        <p className="lead">
          &ldquo;{quote}&rdquo;<br/>- {author}
        </p><hr/>
        <div className="row">
          {projects}
        </div>
      </div>
    );
  }
}

export default Portfolio;
