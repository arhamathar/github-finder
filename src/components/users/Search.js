import React,{useState} from 'react'
import Alert from '../layouts/Alert';

function Search(props) {
  const [search, setSearch] = useState("");

  function handleChange(e){
    setSearch(e.target.value)
  }
  function handleClickSearch(){
    
      props.onSearch(search);
      setSearch("");
    
  }
  function handleClickClear(){
    props.onClear();
  }

  return (
    <div>
      <input type="text" name="input" onChange={handleChange} value={search}
       placeholder="Search Users..." className="form-control my-4 " />
      <button onClick={handleClickSearch} className="btn btn-dark btn-block mb-4" >Search</button>
      {props.show&&<button onClick={handleClickClear} className="btn btn-light btn-block mb-4">Clear Users</button>}
    </div>
  )
}

export default Search;