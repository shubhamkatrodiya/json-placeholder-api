import React, { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Comments = () => {

  let [data,setdata] = useState([]);

  useState(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
            // handle success
            setdata(response.data);
        })
      .catch(function (error) {
            // handle error
            console.log(error);
        });
  })

  return (
    <>
     <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>postId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
        
      </thead>
      <tbody>
      {
                data.map((ele) =>{
                    return (
                        <tr>
                            <td>{ele.postId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.body}</td>
                        </tr>
                    )
                })
            }
      </tbody>
    </Table>
           
        </div>
    </>
  )
}

export default Comments