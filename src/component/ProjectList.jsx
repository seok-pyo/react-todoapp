export default function ProjectList({ data, onProjectClick }) {
  return (
    <div className='w-1/3 h-screen bg-slate-950 flex-col'>
      <h1 className='text-white font-semibold mt-10 ml-5'>YOUR PROJECTS</h1>
      <button className='bg-stone-700 text-stone-400 rounded-lg mt-10 ml-5 p-2.5'>
        + Add Project
      </button>
      {data.map((ele, idx) => (
        <p
          className='text-stone-400 mt-4 ml-10'
          key={idx}
          onClick={() => onProjectClick(ele)}
        >
          {ele.title}
        </p>
      ))}
    </div>
  );
}
