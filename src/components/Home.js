import React from 'react'   
   
export default function Home(){
        return (
        <div>
            <>
              <Navbar />
              <div className="container-fluid">
                {/* <Alert onAlert={alertUser} isAlert={alert}/> */}
                <Search onSearch={searchUser} onClear={clearUser} show={users.length>0?true:false}/>
                <User loading={loading} users={users} />
              </div>
            </>
        </div>
        ) 
  }
