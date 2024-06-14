// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';

// function AddTask() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const history = useHistory();

//   const onSubmit = (data) => {
//     axios.post('http://localhost:5000/tasks', data)
//       .then((data) => console.log(data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h1>Create New Task</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Title</label>
//           <input 
//             type="text" 
//             {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
//           />
//           {errors.title && <p>{errors.title.message}</p>}
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea 
//             {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
//           />
//           {errors.description && <p>{errors.description.message}</p>}
//         </div>
//         <div>
//           <label>Deadline</label>
//           <input 
//             type="date" 
//             {...register('deadline', { required: 'Deadline is required' })} 
//           />
//           {errors.deadline && <p>{errors.deadline.message}</p>}
//         </div>
//         <div>
//           <label>Priority</label>
//           <select 
//             {...register('priority', { required: 'Priority is required' })} 
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//           {errors.priority && <p>{errors.priority.message}</p>}
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }

// export default AddTask;


import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function AddTask() {
  const { register, handleSubmit, formState: { errors } } = useForm();
//   const history = useHistory();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/tasks', data)
      .then((data) => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            className={`mt-1 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            className={`mt-1 p-2 w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deadline</label>
          <input 
            type="date" 
            className={`mt-1 p-2 w-full border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('deadline', { required: 'Deadline is required' })} 
          />
          {errors.deadline && <p className="text-red-500 text-xs mt-1">{errors.deadline.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select 
            className={`mt-1 p-2 w-full border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('priority', { required: 'Priority is required' })} 
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Create</button>
      </form>
    </div>
  );
}

export default AddTask;
