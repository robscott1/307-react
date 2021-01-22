import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


const Table = props => {
  const { characterData, removeCharacter } = props
  console.log(characterData)
  const rows = characterData.map((row, index) => {
    return (
        <tr key={index}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <button onClick={() => removeCharacter(index, row.id)}>Delete</button>
            </td>
        </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
  
export default Table