// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useLoaderData } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// const EditTask = () => {
//     const editService = useLoaderData();
//     const { register, handleSubmit, setValue } = useForm();

//     React.useEffect(() => {
//         setValue('title', editService.title);
//         setValue('name', editService.name);
//         setValue('description', editService.description);
//         setValue('image', editService.image);
//     }, [editService, setValue]);

//     const onSubmit = async (data) => {
//         await fetch(`https://task-management-server-qh4x.onrender.com/tasks/${editService._id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-type": "application/json", 
//             },
//             body: JSON.stringify(data)
//         })
//         .then((res) => res.json())
//         .then(() => {
//             // toast("Edit service successfully!");
//         })
//         .catch(error => {
//             console.error('Error editing service:', error);
//             toast.error("Failed to edit service.");
//         });
//     };

//     return (
//         <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input 
//             type="text" 
//             className={`mt-1 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
//           />
//           {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea 
//             className={`mt-1 p-2 w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
//           />
//           {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Deadline</label>
//           <input 
//             type="date" 
//             className={`mt-1 p-2 w-full border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('deadline', { required: 'Deadline is required' })} 
//           />
//           {errors.deadline && <p className="text-red-500 text-xs mt-1">{errors.deadline.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Priority</label>
//           <select 
//             className={`mt-1 p-2 w-full border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('priority', { required: 'Priority is required' })} 
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//           {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Create Task</button>
//       </form>
//     </div>
//   );
// }

// export default EditTask;

// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLoaderData } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// const EditTask = () => {
//   const task = useLoaderData();
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();

//   useEffect(() => {
//     setValue('title', task.title);
//     setValue('description', task.description);
//     setValue('deadline', new Date(task.deadline));
//     setValue('priority', task.priority);
//   }, [task, setValue]);

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch(`https://task-management-server-qh4x.onrender.com/tasks/${task._id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         // Optionally show success message
//         // toast("Task edited successfully!");
//       } else {
//         throw new Error('Failed to edit task');
//       }
//     } catch (error) {
//       console.error('Error editing task:', error);
//       // Optionally show error message
//       // toast.error("Failed to edit task.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input 
//             type="text" 
//             className={`mt-1 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
//           />
//           {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea 
//             className={`mt-1 p-2 w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
//           />
//           {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Deadline</label>
//           <input 
//             type="date" 
//             className={`mt-1 p-2 w-full border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('deadline', { required: 'Deadline is required' })} 
//           />
//           {errors.deadline && <p className="text-red-500 text-xs mt-1">{errors.deadline.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Priority</label>
//           <select 
//             className={`mt-1 p-2 w-full border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('priority', { required: 'Priority is required' })} 
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//           {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Edit Task</button>
//       </form>
//       {/* Uncomment if using toast notifications */}
//       {/* <ToastContainer /> */}
//     </div>
//   );
// }

// export default EditTask;

// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// const EditTask = () => {
//   const task = useLoaderData();
//   const navigate = useNavigate();
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();

//   useEffect(() => {
//     if (task) {
//       setValue('title', task.title);
//       setValue('description', task.description);
//       setValue('deadline', new Date(task.deadline)); // Format date as yyyy-MM-dd
//       setValue('priority', task.priority);
//     }
//   }, [task, setValue]);

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch(`https://task-management-server-qh4x.onrender.com/tasks/${task._id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         // Optionally show success message
//         // toast("Task edited successfully!");
//         navigate('/dashboard/allTasks'); // Redirect to tasks list after successful edit
//       } else {
//         throw new Error('Failed to edit task');
//       }
//     } catch (error) {
//       console.error('Error editing task:', error);
//       // Optionally show error message
//       // toast.error("Failed to edit task.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input 
//             type="text" 
//             className={`mt-1 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
//           />
//           {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea 
//             className={`mt-1 p-2 w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
//           />
//           {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Deadline</label>
//           <input 
//             type="date" 
//             className={`mt-1 p-2 w-full border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('deadline', { required: 'Deadline is required' })} 
//           />
//           {errors.deadline && <p className="text-red-500 text-xs mt-1">{errors.deadline.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Priority</label>
//           <select 
//             className={`mt-1 p-2 w-full border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             {...register('priority', { required: 'Priority is required' })} 
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//           {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Edit Task</button>
//       </form>
//       {/* Uncomment if using toast notifications */}
//       {/* <ToastContainer /> */}
//     </div>
//   );
// }

// export default EditTask;
