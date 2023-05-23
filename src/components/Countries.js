import React, {useEffect, useState} from 'react';
import axios from "axios";

const Countries = () => {
	const [data, setData] = useState([])
	// le useEffect se joue lorsque le composant est monte
	useEffect(() =>{
		axios.get("https://cors-anywhere.herokuapp.com/https://api.first.org/data/v1/countries")
			.then((res) => setData(res.data.data))}, [])
	return (
		<div className="countries">
			<h1>Countries</h1>
			<ul>
				{
					data.map((country) => (<li>{country.country}</li>))
				}
			</ul>
		</div>
	);
};

export default Countries;