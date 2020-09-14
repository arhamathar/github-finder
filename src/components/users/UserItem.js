import React from 'react';

function UserItem(props){
  return (
    <div className="card text-center m-4 shadow rounded bg-light" style={{width: "20rem"}}>
      <img src={props.avatar_url} alt="user-img" 
      className="img-fluid d-block rounded-circle mx-auto mt-3 mb-2" style={{width: "5rem"}}/>
      <h3>{props.login}</h3>
      <div>
        <a href={props.html_url} className="btn btn-dark mt-2 mb-4">
          More
        </a>
      </div>
    </div>
  );
}

export default UserItem;