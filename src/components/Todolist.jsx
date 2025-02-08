import { useState } from "react";
import delete_icon from '../assets/delete.png'
import tick_icon from '../assets/tick_icon.png'
import todolist_icon from '../assets/todolist_icon.png'

export default function TodoList() {
   const [tasks, setTasks] = useState([]);
   const [task, setTask] = useState("");

   const addTask = () => {
      if (task.trim() === "") return;
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
   };

   const toggleTask = (index) => {
      setTasks(
         tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
         )
      );
   };

   const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
   };

   return (
      <div className="max-w-md mx-auto p-4 bg-gray-300 rounded-lg shadow-md mt-[150px]">
         <div className="flex mb-5 gap-3 h-14">
         <img src={todolist_icon} alt="" className="w-14"/>
         <h1 className="text-2xl font-bold mb-4">Todo List</h1>
         </div>
         <div className="flex gap-2 mb-4">
            
            <input
               className="border p-2 flex-1 rounded"
               value={task}
               onChange={(e) => setTask(e.target.value)}
               placeholder="Add a new task"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Add</button>
         </div>
         <ul className="space-y-2">
            {tasks.map((t, index) => (
               <div key={index} className="p-2 bg-white rounded shadow flex justify-between items-center">
                  <span className={t.completed ? "line-through text-gray-500" : ""}>{t.text}</span>
                  <div className="flex gap-2">
                     <button onClick={() => toggleTask(index)} className="text-green-500">
                        <img src={tick_icon} alt="Complete" className="w-7 h-7" />
                     </button>
                     <button onClick={() => removeTask(index)} className="text-red-500">
                        <img src={delete_icon} alt="Delete" className="w-7 h-7" />
                     </button>
                  </div>
               </div>
            ))}
         </ul>
      </div>
   );
}
