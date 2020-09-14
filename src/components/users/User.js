import React from 'react';
import UserItem from './UserItem';

function User(props){
  
  function createUserItem(userInfo){
    return (<UserItem 
      key={userInfo.id}
      login={userInfo.login}
      avatar_url={userInfo.avatar_url}
      html_url={userInfo.html_url}
      />
    );
  }
  if(props.loading){
    return(
    <div>
      <div class="spinner-border d-block mt-5 mx-auto" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>);
  }
  else{
    return (
      <div className="d-flex justify-content-around flex-wrap">
        {(props.users).map(createUserItem)}      
      </div>
    );
  }
}

export default User;
