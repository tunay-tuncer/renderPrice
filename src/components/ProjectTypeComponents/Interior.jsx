import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext';

import { MdStyle } from "react-icons/md";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";

const Interior = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)

    const interiorStyles = [
        { icon: <MdStyle />, style: "Modern", explanation: "Simple and minimalist designs" },
        { icon: <MdStyle />, style: "Clasic", explanation: "Detailed furnitures and ornaments" },
        { icon: <MdStyle />, style: "Contemporary", explanation: 'In between "Modern" and "Clasic"' },
        { icon: <MdStyle />, style: "Industrial", explanation: 'Raw material with industrial details' },
    ]

    const handleInteriorStyle = (iStyle) => {
        setProjectDetails(prev => ({ ...prev, interiorStyle: iStyle }))
    }

    const increaseRoomCount = () => {
        projectDetails.roomCount < 20 ? setProjectDetails(prev => ({ ...prev, roomCount: prev.roomCount + 1 })) : setProjectDetails(prev => ({ ...prev, roomCount: 20 }))
    }

    const decreaseRoomCount = () => {
        projectDetails.roomCount > 0 ? setProjectDetails(prev => ({ ...prev, roomCount: prev.roomCount - 1 })) : setProjectDetails(prev => ({ ...prev, roomCount: 0 }))
    }

    const handleTotalArea = (e) => {
        setProjectDetails(prev => ({ ...prev, totalArea: e.target.value }))
    }

    return (
        <div className="interior-main-container">

            <div className="interior-style-container">
                <p className='section-heading'>Interior Styles</p>
                <ul className='interior-style-ul'>
                    {interiorStyles.map((iStyle, id) => (
                        <li key={id} onClick={() => handleInteriorStyle(iStyle.style)} className={`${projectDetails.interiorStyle === iStyle.style ? 'selected' : ''}`} style={{ animationDelay: `${id * 0.1 + 0.1}s` }}>
                            <div className="interior-style-heading">
                                {iStyle.icon}
                                <h3>{iStyle.style}</h3>
                            </div>
                            <p className='gray-p'>{iStyle.explanation}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="room-count-main-container">
                <p className='section-heading'>Room Count</p>
                <div className="room-count-container">
                    <button onClick={decreaseRoomCount}><LuCircleMinus /></button>
                    <p>{projectDetails.roomCount}</p>
                    <button onClick={increaseRoomCount}><LuCirclePlus /></button>
                </div>
            </div>

            <div className="area-main-container">
                <p className='section-heading'>Total Area (m²)</p>
                <div className="area-input-container">
                    <input className='area-input' type='number' value={projectDetails.totalArea} onChange={(e) => handleTotalArea(e)} />
                </div>
                <p className='gray-p'>* Minimum area: 1 m²</p>
            </div>

        </div>
    )
}

export default Interior