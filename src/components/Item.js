import React, { useContext } from 'react'
import { Context } from '../context'

const Item = ({ item }) => {
  const { triggerEdit, deleteItem } = useContext(Context)
  const { id, name, name2, age } = item

  return (
    <li className='item'>
      Name: <span>{name}</span>
      {' | '}
      Name2: <span>{name2}</span>
      {' | '}
      Age: <span>{age}</span>
      <button className='green' onClick={() => triggerEdit(id)}>
        Edit
      </button>{' '}
      <button className='red' onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  )
}
export { Item }
