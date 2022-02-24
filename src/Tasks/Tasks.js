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
    localStorage.setItem('Tasks', JSON.stringify(this.state.items));
  }

  handleClick(index){
    const items = this.state.items;
    items[index].complete = !items[index].complete;
    this.storeItems(items);
  }

  archiveTask(index){
    const items = this.state.items;
    if (index === -1) {
      return
    }
    items.splice(index, 1);
    this.storeItems(items);
  }

  handleFlag(index){
    const items = this.state.items;
    items[index].flag = !items[index].flag;
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
              <div className='py-2 w-full'>
                <div
                  className={`flex border border-gray-200 rounded-2xl drop-shadow-lg py-5 px-8 ${task.complete ? 'bg-blue-50' : 'bg-white'}`}
                  id={index}
                  key={index}
                >
                  <div 
                    onClick={() => this.handleClick(index)}
                    className={`rounded-xl h-5 w-5 border-2 my-auto ${task.complete ? 'border-green-600 bg-green-500' : 'border-gray-300'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 30 30" stroke="#FFFFFF">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className={`px-4 flex-grow ${task.complete ? 'line-through text-slate-400' : ''}`}>
                    {task.description}
                  </div>
                  <div
                    className={`${task.complete ? '' : 'hidden'}`}
                    onClick={() => this.archiveTask(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div className='my-auto'>
                    <div 
                      className={`${!task.complete && !task.flag ? '' : 'hidden'}`}
                      onClick={() => this.handleFlag(index)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 27 27" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div
                      className={`${!task.complete && task.flag ? '' : 'hidden'}`}
                      onClick={() => this.handleFlag(index)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w- 6" viewBox="0 0 20 20" fill="red">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className={`${task.complete ? '' : 'hidden'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w- 6" viewBox="0 0 20 20" fill="gray">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }
}

export default HandleUserInput;