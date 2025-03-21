import React, { useEffect, useState, useContext } from 'react';
import { ProjectContext } from "./context/ProjectContext";

// Product Type Components
import Exterior from "./components/ProjectTypeComponents/Exterior"
import Interior from "./components/ProjectTypeComponents/Interior"
import Product from "./components/ProjectTypeComponents/Product"
import Material from "./components/ProjectTypeComponents/Material"

// Rest Of The Components
import Resolution from "./components/Resolution"
import Complication from "./components/Complication"
import Revision from "./components/Revision"
import RenderCount from "./components/RenderCount"
import Output from "./components/Output"
import AnimationTime from './components/AnimationTime';

// React Icons 
import { LuSettings2 } from "react-icons/lu";

const ProjectDetails = () => {
  const { projectDetails, setProjectDetails } = useContext(ProjectContext);
  const [clickedProjectType, setClickedProjectType] = useState(<Interior />);

  useEffect(() => {
    switch (projectDetails.project) {
      case "Interior":
        setClickedProjectType(<Interior />)
        break;
      case "Exterior":
        setClickedProjectType(<Exterior />)
        break;
      case "Product":
        setClickedProjectType(<Product />)
        break;
      case "Material":
        setClickedProjectType(<Material />)
        break;
    }
  }, [projectDetails.project])


  const projectTypeElements = [
    { heading: "Interior", description: "Interior design of homes, offices and commercial spaces" },
    { heading: "Exterior", description: "Building facade and landscape designs" },
    { heading: "Product", description: "Industrial or consumer products" },
    { heading: "Material", description: "Custom texture or PBR material" },
  ]

  const handleProjectSelection = (selection) => {
    setProjectDetails(prev => ({ ...prev, project: selection.heading }));
  }


  return (
    <div className='project-details-main-container'>
      <h2><span><LuSettings2 /></span > Project Details</h2>

      {/* Project Type Selection */}
      <div className="project-type">
        <p className='section-heading'>Project Type</p>
        <ul className='detail-ul'>
          {projectTypeElements.map((item, id) => (
            <li className={`project-item ${projectDetails.project === item.heading ? 'selected' : ''}`} onClick={() => handleProjectSelection(item)} key={id}>
              <h3>{item.heading}</h3>
              <p className='gray-p'>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {clickedProjectType}
      <Resolution />
      <Complication />
      <Output />
      <div className="count-container">
        <Revision />
        <RenderCount />
      </div>
      {projectDetails.outputFormat === "Animation" && <AnimationTime />}
    </div>
  )
}

export default ProjectDetails