import React from 'react';
import './App.css';

const todo = [];

function NumberList(props) {
  const tasksList = props.tasksList;
  const listItems = tasksList.map((tasks) =>
    <li>{tasks}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class HandleUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    todo.push(this.state.value);
    console.log(todo);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <NumberList tasksList={todo}/>
        </div>
      </div>
    );
  }
}

export default HandleUserInput;






