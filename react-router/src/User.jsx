import React from "react";
import { useParams} from "react-router-dom";


// const User = ({ match }) => {
//     return <h1> I am from {match.params.name} page</h1>
// };

const User = ({ match }) => {
    const { name, lname } =useParams();
    return <h1> I am from {name} {lname} page</h1>
};

export default User;