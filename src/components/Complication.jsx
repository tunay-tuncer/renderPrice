import { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const Complication = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)
    const complicationOptions = ["Low", "Medium", "High"]

    const handleComplicationOption = (selection) => {
        setProjectDetails(prev => ({ ...prev, complicationLevel: selection }));
    }

    return (
        <div className='complication-container'>
            <p className='section-heading'>Complexity</p>
            <ul className='complication-ul'>
                {complicationOptions.map((option, id) => (
                    <li key={id} className={`complication-item ${projectDetails.complicationLevel === option ? 'selected' : ''}`} onClick={() => handleComplicationOption(option)}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Complication