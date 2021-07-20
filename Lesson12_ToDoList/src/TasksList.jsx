import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends React.Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Buy bread', done: true, id: 2 },
    ],
  };

  onCreate = text => {
    const { tasks } = this.state;
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };
    const updatedTasks = tasks.concat(newTask);
    this.setState({ tasks: updatedTasks });
  };

  handleTaskStatusChange = id => {
    // 1. Find task in the List
    // 2. Toggle done value
    // 3. Save updated List
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  };

  handleTaskDelete = id => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const sortedList = this.state.tasks
    .slice()
    .sort((a, b) => a.done-b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate}/>
        <ul className="list">
          {this.state.tasks.map(task => (
            <Task key={task.id} onChange={this.handleTaskStatusChange} onDelete={this.handleTaskDelete} {...task} /> // либо id = {task.id} done = {task.done} id = {task.id}
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
