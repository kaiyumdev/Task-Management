// import React, { useState, useEffect } from 'react';

// function AllTasks() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5001/tasks")
//       .then((res) => res.json())
//       .then((data) => setTasks(data));
//   }, []);

// //   const handleDelete = (id) => {
// //     axios.delete(`http://localhost:5000/tasks/${id}`)
// //       .then(() => fetchTasks())
// //       .catch(error => console.error(error));
// //   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Deadline</th>
//             <th>Priority</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map(task => (
//             <tr key={task._id}>
//               <td>{task.title}</td>
//               <td>{task.description}</td>
//               <td>{new Date(task.deadline).toLocaleDateString()}</td>
//               <td>{task.priority}</td>
//               <td>
//                 {/* <Link to={`/edit/${task._id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(task._id)}>Delete</button> */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AllTasks;

// import React, { useState, useEffect } from 'react';

// function AllTasks() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5001/tasks")
//       .then((res) => res.json())
//       .then((data) => setTasks(data));
//   }, []);

//   // const handleDelete = (id) => {
//   //   setServices(services.filter((service) => service._id !== id));
//   //   toast("Delete service successfully!");
//   // };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Task List</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="w-1/4 py-2 px-4">Title</th>
//               <th className="w-1/4 py-2 px-4">Description</th>
//               <th className="w-1/4 py-2 px-4">Deadline</th>
//               <th className="w-1/4 py-2 px-4">Priority</th>
//               <th className="w-1/4 py-2 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task._id} className="border-b">
//                 <td className="py-2 px-4">{task.title}</td>
//                 <td className="py-2 px-4">{task.description}</td>
//                 <td className="py-2 px-4">{new Date(task.deadline).toLocaleDateString()}</td>
//                 <td className="py-2 px-4">{task.priority}</td>
//                 <td className="py-2 px-4">
//                   {/* <Link to={`/edit/${task._id}`} className="text-blue-500 hover:text-blue-700">Edit</Link> */}
//                   <button
//                     onClick={() => handleDelete(task._id)}
//                     className="text-red-500 hover:text-red-700 ml-4"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AllTasks;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:5001/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      // Optionally, you can show a success message here using toast or any other method
    } catch (error) {
      console.error('Error deleting task:', error);
      // Optionally, you can show an error message here using toast or any other method
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2 px-4">Title</th>
              <th className="w-1/4 py-2 px-4">Description</th>
              <th className="w-1/4 py-2 px-4">Deadline</th>
              <th className="w-1/4 py-2 px-4">Priority</th>
              <th className="w-1/4 py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-b">
                <td className="py-2 px-4">{task.title}</td>
                <td className="py-2 px-4">{task.description}</td>
                <td className="py-2 px-4">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="py-2 px-4">{task.priority}</td>
                <td className="py-2 px-4">
                  {/* <Link to={`/edit/${task._id}`} className="text-blue-500 hover:text-blue-700">Edit</Link> */}
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTasks;
