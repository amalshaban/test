 import React, { useEffect, useState, map } from 'react'
import axios from 'axios';

export default function Skills() {
let [usersList, setUsersList]= useState([
  {
    "userId": 3, "id": 3, "title": "welcome", "completed": false
  }
]);
  let getUsers = async () =>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    setUsersList(response.data);
      }
  useEffect(()=>{

    return()=>{
      getUsers();
}},[])
return(
  <table className="table table-primary">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">userId</th>
      <th scope="col">Title</th>
      <th scope="col">completed</th>
    </tr>
  </thead>
  <tbody>
    {usersList.map(user =>(
      <tr key={user.id}>
         <td>{user.id}</td>
      <td>{user.userId}</td>
      <td>{user.title}</td>
      <td>{user.completed}</td>
      
    </tr>)
    )}
  
    
  </tbody>
</table>  

)



};
