import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

class RestaurantSearch extends Component {
    constructor()
    {
        super();
        this.state={
            searchData:null,
            noData:false,
        }
    }
    search(key)
    {
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
           data.json().then((resp)=>{
            console.warn("resp",resp);
            if(resp.length>0)
            {
                this.setState({searchData:resp,noData:false});
            }
            else{
                this.setState({noData:true,searchData:null});
            }
           })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantSearch</h1>
                <input type='text' onChange={(event)=>this.search(event.target.value)}/>
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.searchData.map((item,i)=>

                                <tr>
                                   <td>{i+1}</td>
                                   <td>{item.name}</td>
                                   <td>{item.address}</td>
                                   <td>{item.rating}</td>
                                   <td>{item.email}</td>
                                   
                            
                                 </tr>
                                 


                                )
                            }
                            </tbody>
                            </Table>
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3 color='orange'>No Data Found</h3>:null
                    }
                </div>
            </div>
        );
    }
}

export default RestaurantSearch;