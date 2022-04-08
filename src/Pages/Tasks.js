import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import Task from "../Components/Task"
import "react-datepicker/dist/react-datepicker.css";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      endDate: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('Tasks')) {
      return;
    }
    const items = JSON.parse(localStorage.getItem('Tasks'));
    if (!items.length) {
      return;
    }
    this.setState({
      items: items
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      value: event.target.value
    });

    let items = this.state.items.reverse();

    items.push({
      description: this.state.value,
      complete: false,
      flag: false
    });

    this.storeItems(items);
    this.setState({value: ''});

    event.preventDefault();
  }

  storeItems(items) {
    this.setState({
      items: items
    });

    console.log(items)
    localStorage.setItem('Tasks', JSON.stringify(this.state.items.reverse()));
  }

  handleClick(index){
    const items = this.state.items;
    items[index].complete = !items[index].complete;
    items.reverse();
    this.storeItems(items);
  }

  archiveTask(index){
    const items = this.state.items;
    if (index === -1) {
      return
    }
    items.splice(index, 1);
    items.reverse();
    this.storeItems(items);
  }

  handleFlag(index){
    const items = this.state.items;
    items[index].flag = !items[index].flag;
    items.reverse();
    this.storeItems(items);
  }

  handleCalender(index){

  }

  render() {
    return (
      <div className='flex flex-col justify-center w-full pt-40 absolute'>
        <form onSubmit={this.handleSubmit}>
          <div className='m-auto w-6/12'>
            <input
              type="text" 
              name='taskinput'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='To-do tasks'
              className="w-full border border-gray-200 rounded-2xl drop-shadow-lg py-5 px-8"
            />
          </div>
        </form>

        <hr className='mt-12 w-1/6 m-auto border rounded-xl'/>

        <div className='pt-12 m-auto w-6/12'>
          {this.state.items.map((task, index) => (
            <Task task={task} index={index} handleToDoClick={() => this.handleClick(index)} archiveToDoTask={() => this.archiveTask(index)} handleToDoFlag={() => this.handleFlag(index)}  />
          ))}
        </div>
      </div>
    )
  }
}

export default Tasks;