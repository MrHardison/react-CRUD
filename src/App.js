import React, { useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { Context } from './context'

const App = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Mike',
      name2: 'Scout',
      age: 22
    },
    {
      id: 2,
      name: 'Bruce',
      name2: 'Vayne',
      age: 20
    },
    {
      id: 3,
      name: 'Lex',
      name2: 'Luthor',
      age: 18
    }
  ])
  const [editedItem, setEditedItem] = useState(null)

  const triggerEdit = id => {
    setEditedItem(list.find(i => i.id === id))
  }

  const addItem = item => {
    setList([...list, item])
  }
  const editItem = item => {
    console.log(item)
  }
  const deleteItem = id => {
    setList(list.filter(i => i.id !== id))
  }

  return (
    <Context.Provider value={{ triggerEdit, deleteItem }}>
      <div className='container'>
        <h1>CRUD App with Hooks</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            <h2>Form</h2>
            <Form addItem={addItem} editedItem={editedItem} editItem={editItem}/>
          </div>
          <div className='flex-large'>
            <h2>List</h2>
            <List list={list} deleteItem={deleteItem} />
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export { App }
