import React, { Component } from 'react';

class Abilities extends Component {
  render() {

    if(this.props.data){
      var quote = this.props.data.quotes.abilitySection.quote;
      var author = this.props.data.quotes.abilitySection.author;
      var repo = this.props.data.contact.projectRepo;

      var skills = this.props.data.resume.skills.map(function(skills){
        var skillLevel1 = (skills.level >= 1)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var skillLevel2 = (skills.level >= 2)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var skillLevel3 = (skills.level >= 3)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var skillLevel4 = (skills.level >= 4)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var skillLevel5 = (skills.level == 5)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';

        return <li key={skills.name}>
          <span className="ability-title">{skills.name}</span>
					<span className="ability-score">
            <span className={skillLevel1}></span>
            <span className={skillLevel2}></span>
            <span className={skillLevel3}></span>
            <span className={skillLevel4}></span>
            <span className={skillLevel5}></span>
          </span>
        </li>
      })

      var halfSkills = Math.floor(skills.length / 2);

      var leftSkills = skills.slice(0, halfSkills);
      var rightSkills = skills.slice(halfSkills, skills.length);

      var languages = this.props.data.resume.languages.map(function(languages){
        var languageLevel1 = (languages.level >= 1)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var languageLevel2 = (languages.level >= 2)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var languageLevel3 = (languages.level >= 3)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var languageLevel4 = (languages.level >= 4)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var languageLevel5 = (languages.level == 5)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';

        return <li key={languages.name}>
          <span className="ability-title">{languages.name}</span>
					<span className="ability-score">
            <span className={languageLevel1}></span>
            <span className={languageLevel2}></span>
            <span className={languageLevel3}></span>
            <span className={languageLevel4}></span>
            <span className={languageLevel5}></span>
          </span>
        </li>
      })

      var halfLanguages = Math.floor(languages.length / 2);

      var leftLanguages = languages.slice(0, halfLanguages);
      var rightLanguages = languages.slice(halfLanguages, languages.length);

      var tools = this.props.data.resume.tools.map(function(tools){
        var toolLevel1 = (tools.level >= 1)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var toolLevel2 = (tools.level >= 2)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var toolLevel3 = (tools.level >= 3)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var toolLevel4 = (tools.level >= 4)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';
        var toolLevel5 = (tools.level == 5)?'glyphicon glyphicon-star filled':'glyphicon glyphicon-star';

        return <li key={tools.name}>
          <span className="ability-title">{tools.name}</span>
					<span className="ability-score">
            <span className={toolLevel1}></span>
            <span className={toolLevel2}></span>
            <span className={toolLevel3}></span>
            <span className={toolLevel4}></span>
            <span className={toolLevel5}></span>
          </span>
        </li>
      })

      var halfTools = Math.floor(tools.length / 2);

      var leftTools = tools.slice(0, halfTools);
      var rightTools = tools.slice(halfTools, tools.length);
    }

    return (
      <div className="background-white">
        <div id="abilities" className="container">				
          <h2>Abilities</h2>
          <p className="lead">&ldquo;{quote}&rdquo;<br />- {author}</p><hr/>
          <h3>Skills</h3>
          <div className="row">			
            <div className="col-md-6">
              <ul className="no-bullets">{leftSkills}</ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">{rightSkills}</ul>
            </div>
          </div>
          <div className="text-center project-referal">
            <a href={repo} className="btn btn-primary" target="_blank">See project on Github</a>
          </div><hr/>
          <h3>Languages</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="no-bullets">{leftLanguages}</ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">{rightLanguages}</ul>
            </div>
          </div>
          <hr/>
          <h3>Tools</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="no-bullets">{leftTools}</ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">{rightTools}</ul>
            </div>		
          </div>
        </div>
      </div>
    );
  }
}

export default Abilities;
