import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            address:null,
            rating:null,
            email:null
        }
    }
    create()
    {
        fetch("http://localhost:3000/restaurant",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)  
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Successfully Added");
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}}
                      placeholder='Restaurant Name'/> <br/>
                      <input onChange={(event)=>{this.setState({address:event.target.value})}}
                      placeholder='Address'/> <br/>
                      <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                      placeholder='Rating'/> <br/>
                      <input onChange={(event)=>{this.setState({email:event.target.value})}}
                      placeholder='Email'/> <br/>
                      <button onClick={()=>{this.create()}}>Add Restautant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;