var React = require('react');

var Footer = React.createClass({
    render: function(){
      return (
        <footer className="footer navbar-fixed-bottom well">
           <div className="container">
             <p className="text-muted">This is Footer</p>
           </div>
        </footer>
      );
    }
});

module.exports = Footer;
