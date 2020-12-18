import { useState } from "react";
import SearchResult from "./SearchResult";



const Search = () => {
    
     const [img,setImg] = useState("");
     const inputEvent = (event) => {
        const data =event.target.value;
        setImg(data);
     }


 
    return (
        <>
        <div className="searchBar">
          <input type="text" 
          placeholder="search anything"
          value={img}
          onChange= {inputEvent}></input>
          {img === "" ? null : <SearchResult name= {img} /> }
          </div>
        </>
    );
}

export default Search;