import { Header } from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task 1',
        day: 'Feb 5 at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'task 2',
        day: 'Feb 6 at 6:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'task 3',
        day: 'Feb 13 at 10:00am',
        reminder: false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks( tasks.filter(task => task.id !== id) )
  }

  // Toogle Reminder
  const toogleReminder = (id) => {
    setTasks( tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task) )
  }


  return (
    <div className="container">
      <Header 
        title="header string title" 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={!showAddTask}
      />
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToogle={toogleReminder}
        />
      ) : ("No taks to show") }
    </div>
  );
}

export default App;
