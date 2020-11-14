import React, { useState } from "react"
import Nav from "./Nav"

function NavContainer(props){
    let [search, setSearch] = useState(null);
    console.log({search});

    return <Nav search={search} setSearch={setSearch}/>
}

export default NavContainer;