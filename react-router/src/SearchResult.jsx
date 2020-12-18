

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.name}`;
    return (
       <>
         <div>
             <img src ={img} alt="just img"/>
         </div>
       </>
    );
}

export default SearchResult;