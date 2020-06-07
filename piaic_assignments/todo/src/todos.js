import React from 'react';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.addHandler = this.addHandler.bind(this)
        this.completeHandler = this.completeHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)

        this.state = {
            todos: [
                { id: 1, task: 'Todo 1', isCompleted: false },
                { id: 2, task: 'Todo 2', isCompleted: true },
                { id: 3, task: 'Todo 2', isCompleted: false }
            ]
        };
    }

    addHandler(data) {
        this.setState({
            todos: this.state.todos.concat([data])
        })
    }

    deleteHandler(propId) {
        var arr = [];
        this.state.todos.map((item) => {

            if (item.id != propId) {
                arr.push(item)
            }
        })
        this.setState({
            todos: arr
        })
    }

    completeHandler(data) {
        var arr = [];
        this.state.todos.map((item) => {
            if (item.id == data) {
                item.isCompleted = true;
                arr.push(item)
            } else{
                arr.push(item)
            }
        })
        this.setState({
            todos: arr
        })
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <TodoFormComponent todo={this.state.todos} addHandler={this.addHandler} />
                <hr />
                <table width="80%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.todos.map(todo => <TodoComponent todo={todo} completeHandler={this.completeHandler}
                                deleteHandler={this.deleteHandler}
                            />)
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

class TodoComponent extends React.Component {

    completeHandler = (val) => {
        this.props.completeHandler(val);
    }



    deleteHandler = (val) => {
        this.props.deleteHandler(val);
    }

    render() {
        return (
            <tr bgcolor={this.props.todo.isCompleted ? 'green' : 'transparent'}>
                <td>{this.props.todo.id}</td>
                <td>{this.props.todo.task}</td>
                <td>{this.props.todo.isCompleted.toString()}</td>
                <td>
                    <button onClick={() => this.completeHandler(this.props.todo.id)}>Complete</button> <strong> | </strong>
                    <button onClick={() => this.deleteHandler(this.props.todo.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

class TodoFormComponent extends React.Component {

    addTodo = (ev) => {
        ev.preventDefault();
        let taskData = document.getElementById('task').value;
        console.log('Clicked Add Todo', taskData);

        let obj = {
            id: this.props.todo.length + 1,
            task: taskData,
            isCompleted: false
        };
        console.log('obj', obj);
        console.log(' this.props.todo', this.props.todo);

        this.props.addHandler(obj);
    }

    inputChnageHandler = (event) => {
        console.log('yahaoaooaooo', event.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" id="task" name="task"
                    onChange={this.inputChnageHandler
                        //     () => {
                        //     console.log('yahoooo')
                        // }
                    }
                    placeholder="type some task" />
                <input type="submit" name="submit-btn" value="Add Todo" onClick={this.addTodo} />
            </form>
        )
    }

}


export default Todos;