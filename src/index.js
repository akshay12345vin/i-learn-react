var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header');

var Index = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
			</div>
		);
	}
});

ReactDOM.render(<Index />, document.getElementById('react_app'));
