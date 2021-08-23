import React, { Component } from 'react';
import axios from 'axios';

export default class Adddata extends Component {

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeToDo = this.onChangeToDo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      todo: ''
    }
  }

  changeStuff(name,todo) {
    this.setState({ name: name })
    this.setState({ todo: todo })
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeToDo(e) {
    this.setState({ todo: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      todo: this.state.todo
    };

    axios.post('http://127.0.0.1:8000/api/dailytask', userObject)
      .then((res) => {
        window.location.reload()
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });

    this.setState({ name: '', todo: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="form-group">
            <input type="text" name="name" id="name" className="form-control col-lg-3" placeholder="Enter Name" value={this.state.name}
              onChange={this.onChangeName} />
          </div>
          <div className="form-group">
            <input type="text" name="todo" id="todo" className="form-control col-lg-3" placeholder="Enter Name" value={this.state.todo}
              onChange={this.onChangeToDo} />
          </div>
          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );
  }
}
