import React, { useEffect, useState, useContext } from 'react';
import { ProjectContext } from "../context/ProjectContext";

const Output = ({ setOutputValue }) => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);
    const outputOptions = ["PNG", "360°", "VR", "Animation"]

    const handleOutputOption = (selection) => {
        setProjectDetails(prev => ({ ...prev, outputFormat: selection }));

    }

    return (
        <div className='output-container'>
            <p className='section-heading'>Output</p>
            <ul className='output-ul'>
                {outputOptions.map((option, id) => (
                    <li key={id} className={`output-item ${projectDetails.outputFormat === option ? 'selected' : ''}`} onClick={() => handleOutputOption(option)}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Output