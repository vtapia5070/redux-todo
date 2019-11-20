import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    value: ''
  }

  addNewTodo = () => {
    console.log('NEW TODO:', { todo: this.state.value, completed: false })
  }

  render () {
    return(
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={(evt) => this.setState({value: evt.target.value})} 
        />
        <button onClick={this.addNewTodo}>Add</button>
      </div>
    )
  }
}

export default AddTodo
