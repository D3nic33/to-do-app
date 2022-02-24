import React from 'react';

class HandleUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: []
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

    let items = this.state.items;

    items.push({
      description: this.state.value,
      status: null
    });

    this.storeItems(items);
    this.setState({value: ''});

    event.preventDefault();
  }

  storeItems(items) {
    this.setState({
      items: items
    });

    localStorage.setItem('Tasks', JSON.stringify(this.state.items));
  }

  handleClick(index){
    const items = this.state.items;
    items[index].status = 'completed';
    this.storeItems(items);
  }

  render() {
    return (
      <div className='flex flex-col justify-center w-full pt-36 absolute'>
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
              <div className='py-2' key={index}>
                <div
                  onClick={() => this.handleClick(index)} //(), wordt pas aangeroepen wanneer je event afvuurt
                  className={`border border-gray-200 rounded-2xl drop-shadow-lg py-5 px-10 ${task.status === 'completed' ? 'bg-lime-100' : 'bg-white'}`}>
                    {task.description}
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }
}

export default HandleUserInput;