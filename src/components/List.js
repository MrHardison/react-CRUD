import React from 'react'
import { Item } from './Item'

const List = ({ list }) => {
  return (
    <ul className='list'>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

export { List }
