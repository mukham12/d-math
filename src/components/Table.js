import React from 'react'

const Table = (props) => {
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
					<td>{}</td>
				</tr>
				<tr>
					<td>T</td>
					<td>F</td>
					<td>{}</td>
				</tr>
				<tr>
					<td>F</td>
					<td>T</td>
					<td>{}</td>
				</tr>
				<tr>
					<td>F</td>
					<td>F</td>
					<td>{}</td>
				</tr>
			</table>
		</div>
	)
}

export default Table
