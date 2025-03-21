import { useContext } from 'react'
import { ProjectContext } from "../context/ProjectContext";

const AnimationTime = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)
    const rangeSeconds = [5, 10, 15, 20, 25, 30]

    return (
        <div className='animation-time-container'>
            <p className='section-heading'>Animation Time</p>
            <div className="range-container">
                <input type="range" name="animation-time-range" className='animation-time-range' min={rangeSeconds[0]} max={rangeSeconds[rangeSeconds.length - 1]} step={1} onChange={(e) => setProjectDetails(prev => ({ ...prev, animationTime: e.target.value }))} value={projectDetails.animationTime} />
                <ul className="range-second-slider">
                    {rangeSeconds.map((second, id) => (
                        <li key={id} className='gray-p'>{second}</li>
                    ))}
                    <p className='range-value' style={{ left: `${((projectDetails.animationTime - rangeSeconds[0]) / (rangeSeconds[rangeSeconds.length - 1] - rangeSeconds[0])) * 100}%` }}>{projectDetails.animationTime}</p>
                </ul>
            </div>
        </div>
    )
}

export default AnimationTime