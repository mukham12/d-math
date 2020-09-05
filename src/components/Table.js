import React from 'react'

const calculateValues = (operation) => {
    if (operation === '→') {
        return ['T', 'F', 'T', 'T']
    } else if (operation === '⇔') {
        return ['T', 'F', 'F', 'T']
    } else if (operation === '∧') {
        return ['T', 'F', 'F', 'F']
    } else if (operation === '∨') {
        return ['T', 'T', 'T', 'F']
    }
}

const Table = (props) => {
    const values = calculateValues(props.operation)
    return (
        <div>
            <table>
                <tr>
                    <td>p</td>
                    <td>q</td>
                    <td>p {props.operation} q</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>T</td>
                    <td>{values[0]}</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>F</td>
                    <td>{values[1]}</td>
                </tr>
                <tr>
                    <td>F</td>
                    <td>T</td>
                    <td>{values[2]}</td>
                </tr>
                <tr>
                    <td>F</td>
                    <td>F</td>
                    <td>{values[3]}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
