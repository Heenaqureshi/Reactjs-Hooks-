import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const Usecontext = () => {
    const [user, setUser] = useState("React js");

  return (
    
    <>
      {/* <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} /> */}
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
    </>

  )
}
function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext)
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  
