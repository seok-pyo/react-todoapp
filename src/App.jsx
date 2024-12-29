import { useState } from 'react';

import ProjectList from './component/ProjectList';
import MainBoard from './component/MainBoard';
import Details from './component/Details';

// const data = {
//   title: '',
//   description: '',
//   dueDate: '',
//   tasks: [],
// };

// const dataList = [];

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    tasks: [],
  });
  const [dataList, setDataList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [createState, setCreateState] = useState(false);

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function saveFormData() {
    setDataList((prev) => [...prev, formData]);
  }

  function handleCreate() {
    console.log('Clicked!');
    setCreateState((prev) => !prev);
  }

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  function updateTasks(newTasks) {
    setDataList((prev) =>
      prev.map((project) =>
        selectedProject.title === project.title
          ? { ...project, tasks: [...project.tasks, newTasks] }
          : project
      )
    );

    setSelectedProject((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTasks],
    }));
  }

  return (
    <>
      <div className='flex'>
        <ProjectList data={dataList} onProjectClick={handleProjectClick} />

        {selectedProject ? (
          <Details project={selectedProject} updateTasks={updateTasks} />
        ) : (
          <MainBoard
            onClick={handleCreate}
            onClickSave={saveFormData}
            onChange={handleInputChange}
            createState={createState}
          />
        )}
      </div>
    </>
  );
}

export default App;