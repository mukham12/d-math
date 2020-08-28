import React from 'react'
import Table from './components/Table'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Truth Table Builder</h1>
				<input type="text" />
				<button>Submit</button>
				<Table />
			</div>
		)
	}
}
