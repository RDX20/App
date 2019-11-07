import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Hello.css';

const Hello = props => {
		return (
			<div >
				<h1> Hello </h1>
				<p> How are you! {props.pop} </p>
				<a href="./hh.html" > Click to go! </a>
				<br />
				<button className = " btn btn-primary " > Hello </button>
			</div>
		);
	
}

export default Hello;
