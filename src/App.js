import React from 'react'
import Table from './components/Table'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formula: '→',
			error: false,
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (event) => {
		let operations = ['&&', '||', '/', '/\\']
		if (operations.includes(event.target.value)) {
			this.setState({
				formula:
					event.target.value.replace(/ /g, '') !== ''
						? event.target.value
						: '→',
				error: false,
			})
		} else if (event.target.value === '') {
			this.setState({ formula: '→', error: false })
		} else {
			this.setState({ error: true })
		}
	}

	render() {
		return (
			<div className="container">
				<h1>Truth Table Builder</h1>
				<p>
					Tool to generate a truth table for propositional logic.
					<br />
					Enter logical operators by using /\, \/ (slashes) or the way they are
					used
					<br /> in programming which is && (AND), || (OR), ! (NOT)
				</p>
				<form>
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="Enter a formula"
					/>
				</form>
				<Table operation={this.state.formula} />
				<div className="error">
					<h1>{this.state.error ? 'Please enter a valid operation' : ''}</h1>
				</div>
			</div>
		)
	}
}
