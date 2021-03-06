import React, { useState, useEffect } from 'react'

const Form = ({ addItem }) => {
  const initial = {
    id: null,
    name: '',
    name2: '',
    age: ''
  }
  const [data, setData] = useState(initial)

  const handleAdd = e => {
    e.preventDefault()
    if (data.name.length && data.name2.length && data.age.length) {
      addItem({ ...data, id: Date.now() })
      setData(initial)
    }
  }
  const handleInput = e => {
    if (e.target.value && e.target.value.length) {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  }
  return (
    <form>
      <label>Name</label>
      <input name='name' type='text' value={data.name} onChange={handleInput} />
      <label>Name2</label>
      <input
        name='name2'
        type='text'
        value={data.name2}
        onChange={handleInput}
      />
      <label>Age</label>
      <input name='age' type='text' value={data.age} onChange={handleInput} />
      <button onClick={handleAdd}>Edit</button>
    </form>
  )
}

export { Form }
