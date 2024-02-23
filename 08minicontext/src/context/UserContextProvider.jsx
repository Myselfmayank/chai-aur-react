import React from "react";
import UserContext from "./UserContext";

const UserContextProvider =  ({children}) => {
    const [user, setUser] = React.useState(null); //we can use Usestate hook wihtout importing with this syntax
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider