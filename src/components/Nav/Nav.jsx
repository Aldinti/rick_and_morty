import React from "react";
import SearchBar from "../SearchBar/SearchBar";
// import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
// import About from "../About/About";

export default class Nav extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div /* className={styles.nav} */>
				<SearchBar onSearch={this.props.onSearch} />
				<br />
				<Link to="/about"><h3>About</h3></Link>
				<Link to="/home"><h3>Home</h3></Link>
			</div>
		);
	}
}
