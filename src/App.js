import React from 'react'
import Table from './components/Table'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            operation: '→',
            error: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    changeSymbol = (symbol) => {
        symbol = symbol.toLowerCase().replace(/ /g, '')
        if (symbol === '&&' || symbol === '/\\' || symbol === 'and') {
            return '∧'
        } else if (
            symbol === '||' ||
            symbol === '\\/' ||
            symbol === 'v' ||
            symbol === 'or'
        ) {
            return '∨'
        } else if (symbol === '->' || symbol === 'if') {
            return '→'
        } else if (symbol === '<->' || symbol === 'iff') {
            return '⇔'
        }
    }

    handleChange = (event) => {
        event.target.value = event.target.value.toLowerCase().replace(/ /g, '')
        let operations = [
            '&&',
            '||',
            '\\/',
            '/\\',
            '->',
            '<->',
            'iff',
            'if',
            'or',
            'and',
        ]
        if (operations.includes(event.target.value)) {
            this.setState({
                operation:
                    event.target.value !== ''
                        ? this.changeSymbol(event.target.value)
                        : '→',
                error: false,
            })
        } else if (event.target.value === '') {
            this.setState({ operation: '→', error: false })
        } else if (event.target.value.length >= 2) {
            this.setState({ error: true })
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Truth Table Builder</h1>
                <p>
                    Tool to generate a truth table for propositional logic.
                    <br/>
                    Enter logical operators by using /\, \/ (slashes) or the way they are
                    used
                    <br/> in programming which is && (AND), || (OR), ! (NOT)
                </p>
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter an operation"
                        maxLength="3"
                    />
                </form>
                <Table operation={this.state.operation}/>
                <div className="error">
                    <h1>{this.state.error ? 'Please enter a valid operation' : ''}</h1>
                </div>
            </div>
        )
    }
}
