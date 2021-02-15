import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var quote = this.props.data.quotes.contactSection.quote;
      var author = this.props.data.quotes.contactSection.author;
    }

    return (
      <div className="background-gray">
         <div id="contact" className="container">
				<h2>Contact</h2>
				<p className="lead">
					&ldquo;{quote} &rdquo;<br />- {author}
				</p><hr/>
            <div className="row" id="contact-div">
				   <form className="col s12" id="contact-form" action="./php/send.php" method="POST">
				    	<div className="row">
					    	<div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="group">
                           <input id="name" name="name" type="text" className="validate" required></input>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label for="name">Name</label>
                        </div>
					      </div>
					      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="group">
                           <input id="email" name="email" type="email" className="validate" required></input>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label for="email">Email</label>
                        </div>
                     </div>
					   </div>
                  <div className="row">
                     <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="group">
                           <input id="phone" name="phone" type="tel" className="validate" required></input>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label for="phone">Mobile No</label>
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="group">
                           <input id="company" name="company" type="text" className="validate" required></input>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label for="company">Company</label>
                        </div>
                     </div>
                  </div>
                  <div className="group">
                     <textarea id="message" name="message" type="text" className="validate"  required></textarea>
                     <span className="highlight"></span>
                     <span className="bar"></span>
                     <label for="message">Message</label>
                  </div>
                  <div className="group">
                     <button id="sendMessage" type="submit" className="btn btn-primary" value="submit" name="action" onclick="Materialize.toast('Message Sent!', 4000)">
                        Send&nbsp;
                        <span className="glyphicon glyphicon-send"></span>
                     </button>
                  </div>                  
		        	</form>			
				</div>	  		
			</div>
         <div className="modal fade" id="upgrade-dialog" tabindex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Your browser is out of date</h4>
						</div>
						<div className="modal-body">
							<p>To get the best possible Experience using our site we recommend that you upgrade to a modern web browser. To download a newer web browser click on the Upgrade button.</p>
						</div>
						<div className="modal-footer">
							<a href="https://browsehappy.com/" target="_blank" className="btn btn-primary">Upgrade</a>
						</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
}

export default Contact;
