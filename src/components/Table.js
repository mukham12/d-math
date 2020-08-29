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
				</tr>
				<tr>
					<td>T</td>
					<td>F</td>
				</tr>
				<tr>
					<td>F</td>
					<td>T</td>
				</tr>
				<tr>
					<td>F</td>
					<td>F</td>
				</tr>
			</table>
		</div>
	)
}

export default Table
