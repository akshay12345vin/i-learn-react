var React = require('react');

var Header = React.createClass({
	var links = [
		"1": "About",
		"2": "Home",
		"3": "Exit"
	];

	render: function(){
		return (
			<header>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">This is Header Of the hello core</a>
						</div>

						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#"></a></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
});

module.exports = Header;
