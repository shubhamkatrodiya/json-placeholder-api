import React, { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Posts = () => {

    let [data,setdata] = useState([]);

    useState(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        
      </thead>
      <tbody>
      {
                data.map((ele) =>{
                    return (
                        <tr>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                        </tr>
                    )
                })
            }
      </tbody>
    </Table>
           
        </div>
    )
}

export default Posts
