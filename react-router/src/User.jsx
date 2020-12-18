import React from "react";
import { useLocation, useParams} from "react-router-dom";


// const User = ({ match }) => {
//     return <h1> I am from {match.params.name} page</h1>
// };

const User = ({ match }) => {
    const { name, lname } =useParams();
     
    const location = useLocation();
    console.log(location);



    return (
        <>
      <h1> I am from {name} {lname} page</h1>
      <p> My Current Location Is {location.pathname}</p>
        </>
    )
};

export default User;