import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={styles.nav}>
				<SearchBar onSearch={this.props.onSearch} />
			</div>
		);
	}
}
