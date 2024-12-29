import AddProject from './AddProject';

export default function MainBoard({
  onClick,
  onChange,
  onClickSave,
  createState,
}) {
  return (
    <>
      {createState ? (
        <AddProject
          handleInputChange={onChange}
          onClickSave={onClickSave}
        ></AddProject>
      ) : (
        <div className='w-2/3 flex-col content-center justify-center justify-items-center'>
          <h1 className='text-xl font-semibold'>No Project Selected</h1>
          <p className='text-stone-700 text-lg mt-5'>
            Select a projcet or get started with a new one
          </p>
          <button
            onClick={onClick}
            className='bg-stone-700 text-stone-400 rounded-lg mt-10 ml-5 p-2.5'
          >
            Create new project
          </button>
        </div>
      )}
    </>
  );
}
