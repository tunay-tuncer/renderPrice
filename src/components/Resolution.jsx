import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

const Resolution = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);
    const resolutionOptions = ["720P", "1080P", "4K", "6K"];

    const handleResolutionOption = (selection) => {
        setProjectDetails(prev => ({ ...prev, resolutionValue: selection }));
    };

    return (
        <div className='resolution-container'>
            <p className='section-heading'>Resolution</p>
            <ul className='resolution-ul'>
                {resolutionOptions.map((option, id) => (
                    <li
                        key={id}
                        className={`resolution-item ${projectDetails.resolutionValue === option ? 'selected' : ''}`}
                        onClick={() => handleResolutionOption(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resolution;
