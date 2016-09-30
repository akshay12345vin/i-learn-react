var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header');
var Footer = require('./Footer');

var Index = React.createClass({
	render: function(){
		return(
			<div>
				<div className="container">
						<Header />
						<Footer />
				</div>
			</div>
		);
	}
});

ReactDOM.render(<Index />, document.getElementById('react_app'));
