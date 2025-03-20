import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";

const Revision = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)

    const increaseRevision = () => {
        projectDetails.revisionCount < 10 ? setProjectDetails(prev => ({ ...prev, revisionCount: prev.revisionCount + 1 })) : setProjectDetails(prev => ({ ...prev, revisionCount: 10 }))
    }

    const decreaseRevision = () => {
        projectDetails.revisionCount > 0 ? setProjectDetails(prev => ({ ...prev, revisionCount: prev.revisionCount - 1 })) : setProjectDetails(prev => ({ ...prev, revisionCount: 0 }))
    }

    return (
        <div className='revision-container'>
            <p className='detail-heading'>Revision Count</p>
            <div className="revision-counter">
                <button onClick={() => decreaseRevision()}><LuCircleMinus /></button>
                <p>{projectDetails.revisionCount}</p>
                <button onClick={() => increaseRevision()}><LuCirclePlus /></button>
            </div>
        </div>
    )
}

export default Revision