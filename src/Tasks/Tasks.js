import React from 'react';

class NumberList extends React.Component {

  handleClick(){
    alert();
  }

  render() {
    const listItems = this.props.tasks.map((tasks) =>
      <div className='py-2'>
        <div
          key={tasks}
          onClick={this.handleClick} 
          className='bg-white border border-gray-200 rounded-2xl drop-shadow-lg py-5 px-10'>
            {tasks}
        </div>
      </div>
    );

    return (
      <div className='w-full'>
        {listItems}
      </div>
    );
  }
}

class HandleUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      status: ''
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
      value: event.target.value,
      status: 'to-do'
    });

    let items = this.state.items;
    items.push(this.state.value);

    this.setState({
      items: items
    });

    this.setState({value: ''});
    localStorage.setItem('Tasks', JSON.stringify(this.state.items));

    event.preventDefault();
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
            <NumberList tasks={this.state.items}/>
          </div>
      </div>
    )
  }
}

export default HandleUserInput;