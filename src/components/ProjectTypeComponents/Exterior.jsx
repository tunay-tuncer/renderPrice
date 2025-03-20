import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext';

import { FaBuilding } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";

const Exterior = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)

    const exteriorStyles = [
        { icon: <FaBuilding />, style: "Apartment" },
        { icon: <BsBuildingsFill />, style: "Apartment Complex" },
        { icon: <FaHouse />, style: "Villa" },
        { icon: <FaStore />, style: "Commercial" }
    ]

    const handleInteriorStyle = (exteriorStyle) => {
        setProjectDetails(prev => ({ ...prev, exteriorStyle: exteriorStyle }))
    }

    return (
        <div className='exterior-main-container'>
            <div className="exterior-style-container">
                <p className='section-heading'>Building Type</p>
                <ul className="exterior-style-ul" >
                    {exteriorStyles.map((item, id) => (
                        <li key={id} className={`exterior-style-li ${projectDetails.exteriorStyle === item.style ? 'selected' : ''}`} onClick={() => handleInteriorStyle(item.style)} style={{ animationDelay: `${id * 0.1 + 0.1}s` }}>
                            {item.icon}
                            <h3>{item.style}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Exterior