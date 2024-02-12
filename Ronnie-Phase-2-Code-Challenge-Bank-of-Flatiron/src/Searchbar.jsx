import React from "react";

// this function is for searching a transaction

function Searchbar({onSearch}){
    return(
        <div className="Search Bar">
            <input
            type="text"
            placeholder="Search by using the description"
            onChange={(event) => onSearch(event.target.value)}
           />    
        </div>
    )
}

export default Searchbar;
