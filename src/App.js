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
    this.setState({value: event.target.value});
    todo.push(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div className='flex justify-center'>
        <div className='flex-col'>
          <form onSubmit={this.handleSubmit}>
            <label tmlFor="taskinput" className="block text-xl font-medium text-gray-700">Taken</label>
              <div className="mt-1 flex items-center">
                <div className="inline-block">
                  <input
                      type="text" 
                      name='taskinput'
                      value={this.state.value}
                      onChange={this.handleChange}
                      className="border-gray-300 border-2 shadow-sm"
                    />
                </div>
                <input type="submit" value="Toevoegen" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
              </div>
          </form>
          <div>
            <NumberList tasksList={todo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HandleUserInput;






/*
      <div className='container ml-12'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text" 
              value={this.state.value}
              onChange={this.handleChange}
              className="border-gray-200 border-2"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <NumberList tasksList={todo}/>
        </div>
      </div>
    );*/