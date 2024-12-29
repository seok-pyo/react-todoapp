import { useRef } from 'react';

export default function Details({ project, updateTasks }) {
  console.log(project.tasks);
  const inputVal = useRef();

  function handleInput() {
    updateTasks(inputVal.current.value);
    inputVal.current.value = '';
  }

  return (
    <div className='p-20 w-2/3'>
      <h1>{project.title}</h1>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>
      <br></br>
      <h1>TASKS</h1>
      <input ref={inputVal} type='text'></input>
      <button className='ml-5' onClick={handleInput}>
        Add Task
      </button>
      <ol className='mt-5'>
        {project.tasks.map((el, idx) => (
          <li key={idx} className='flex justify-between pr-10'>
            <p className='text-stone-500'>{el}</p>
            <button>Clear</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
