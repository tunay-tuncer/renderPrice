import React, { useEffect, useState, useContext } from 'react';
import { ProjectContext } from "../context/ProjectContext";

const RenderCount = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);

    const increaseRender = () => {
        projectDetails.renderCount < 20 ? setProjectDetails(prev => ({ ...prev, renderCount: prev.renderCount + 1 })) : setProjectDetails(prev => ({ ...prev, renderCount: 20 }))
    }

    const decreaseRender = () => {
        projectDetails.renderCount > 1 ? setProjectDetails(prev => ({ ...prev, renderCount: prev.renderCount - 1 })) : setProjectDetails(prev => ({ ...prev, renderCount: 1 }))
    }

    return (
        <div className='render-container'>
            <p className='detail-heading'>Render Count</p>
            <div className="render-counter">
                <button onClick={() => decreaseRender()}>-</button>
                <p>{projectDetails.renderCount}</p>
                <button onClick={() => increaseRender()}>+</button>
            </div>
        </div>
    )
}

export default RenderCount