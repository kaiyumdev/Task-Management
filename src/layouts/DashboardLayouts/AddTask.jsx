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
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            {...register('title', { required: 'Title is required', maxLength: { value: 100, message: 'Title must be less than 100 characters' } })} 
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>Description</label>
          <textarea 
            {...register('description', { required: 'Description is required', maxLength: { value: 500, message: 'Description must be less than 500 characters' } })} 
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label>Deadline</label>
          <input 
            type="date" 
            {...register('deadline', { required: 'Deadline is required' })} 
          />
          {errors.deadline && <p>{errors.deadline.message}</p>}
        </div>
        <div>
          <label>Priority</label>
          <select 
            {...register('priority', { required: 'Priority is required' })} 
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          {errors.priority && <p>{errors.priority.message}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddTask;
