export default function AddProject({ handleInputChange, onClickSave }) {
  return (
    <>
      <div className='w-2/3 flex-col'>
        <div className='justify-self-end mr-10'>
          <button>Cancel</button>
          <button
            className='bg-stone-700 text-stone-400 rounded-lg mt-10 ml-5 p-2.5'
            onClick={onClickSave}
          >
            Save
          </button>
        </div>
        <div className='flex flex-col w-full pr-10 pl-10'>
          <label htmlFor='title' className='mt-2 mb-2 text-sm font-medium'>
            TITLE
          </label>
          <input
            id='title'
            type='text'
            className='bg-stone-200 mt'
            onChange={handleInputChange}
          ></input>
          <label
            htmlFor='description'
            className='mt-2 mb-2 text-sm font-medium'
          >
            DESCRIPTION
          </label>
          <textarea
            id='description'
            type='text'
            className='bg-stone-200'
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor='due date' className='mt-2 mb-2 text-sm font-medium'>
            DUE DATE
          </label>
          <input
            id='dueDate'
            type='date'
            className='bg-stone-200'
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </>
  );
}
