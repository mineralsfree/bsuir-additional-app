import React from "react";
import './Table.scss'
export const Table = props => {
  return (<table>
    <thead>
    <tr>
      {props.head.map((el) => {
        return <th key={el}>{el}</th>
      })}
    </tr>
    </thead>
    <tbody>
    {props.data.map(el => {
      return (<tr>{el.map((item) => {
        return (<td>{item}</td>)
      })}</tr>)
    })}
    </tbody>

  </table>)
}