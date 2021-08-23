import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            deleteid: '',
            loading: true
        }
    }
    async getUsersData() {
        const res = await axios.get('http://127.0.0.1:8000/api/dailytask')
        this.setState({ loading: false, persons: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }

    onClickDelete(id) {
        axios.delete('http://127.0.0.1:8000/api/dailytask/' + id)
            .then((res) => {
                window.location.reload()
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        console.log(id);
    }

   

    onClickEdit(id){
        axios.get('http://127.0.0.1:8000/api/dailytask/'+id)
        .then((res) => {
          console.log(res.data)

          
        }).catch((error) => {
          console.log(error)
        });
        
    }


    
    render() {

        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">aa</th>
                        <th scope="col-lg-3">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.persons.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.todo}</td>
                                <td><input type="button" value="Edit" onClick={() => this.onClickEdit(item.id)} className="btn btn-primary" /></td>
                                <td><input type="button" onClick={() => this.onClickDelete(item.id)} value="Delete" className="btn btn-danger" /></td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}