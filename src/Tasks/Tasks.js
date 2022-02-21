import React, {useEffect} from 'react';

const todo = [];

function NumberList(props) {
  const ls = JSON.parse(localStorage.getItem('Tasks'));
  useEffect(() => {
    if(ls != null){
      tasksList.push(ls);
    }
  }, [todo]);

  const tasksList = props.tasksList;
  const listItems = tasksList.map((tasks) =>
    <div className='py-2'>
      <div key={tasks} className='border-gray-200 border-2 rounded-md shadow-sm py-2 px-2'>
        {tasks}
      </div>
    </div>
  );
  return (
    <div className='w-full py-2 px-2'>
      {listItems}
    </div>
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
    localStorage.setItem('Tasks',JSON.stringify( todo ));
    event.preventDefault();
  }

  render() {
    return (
      <div className='flex justify-center w-full'>
        <div className='flex-col'>
          <form className='pb-4' onSubmit={this.handleSubmit}>
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


//const ls = JSON.parse(localStorage.getItem('Tasks'));
//if(ls != null){
//  tasksList.push(ls);
//}