import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    
    Link
    
  } from 'react-router-dom'

class RestaurantList extends Component {
    constructor()
    {
        super();
        this.state={
            list:null,

        }
    }
    componentDidMount()
    {
        this.getData();
    }
    getData()
    {
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                
                this.setState({list:result})
            })
        })
    }
    delete(id)
    {
        
        fetch("http://localhost:3000/restaurant/"+id,
        {  // Use 'id' directly here
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            
          })
            .then((result) => result.json())
            .then((resp) => {
              alert('Successfully Deleted');
              this.getData();
            });
    }
    render() {
        console.warn(this.state);
        return (
            <div>
                <h1>RestaurantList</h1>
                {
                    this.state.list?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Email</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                               this.state.list.map((item,i)=>
                                <tr>
                                   <td>{i+1}</td>
                                   <td>{item.name}</td>
                                   <td>{item.address}</td>
                                   <td>{item.rating}</td>
                                   <td>{item.email}</td>
                                   <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit } color='orange'/></Link>
                                   <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash } color='red'/></span></td>
                            
                                 </tr>
                              )
                            }
                          </tbody>
                       </Table>
                    </div>
                    :<p>Please wait...</p>
                }
            </div>
        );
    }
}

export default RestaurantList;