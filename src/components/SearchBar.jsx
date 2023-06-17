import {useState} from 'react'
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    console.log('event --->', event.target.value)
    setId(event.target.value)
    // setId((id + 1))
  };
  const add = () => {
    onSearch(id)
    setId('')
  }
  const randomChar = () => {
    const numRan = Math.floor(Math.random() * 825) + 1;
    onSearch(numRan)
  }
  return (
    <div className = 'search'>
      <label htmlFor='search-input'>Insert Id  </label>
      <input 
      type = 'search' 
      onChange = {handleChange} 
      value = {id} 
      name = 'id' 
      placeholder = 'insert id ...'/>
      <button onClick={add}>Add</button> 
      <button onClick={randomChar}>Ran</button> 
    </div>
  );
}
