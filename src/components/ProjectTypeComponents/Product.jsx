import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext';

import { MdStyle } from "react-icons/md";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";

const Product = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext)

    const increaseProductCount = () => {
        projectDetails.productCount < 3 ?
            setProjectDetails(prev => ({ ...prev, productCount: prev.productCount + 1 })) :
            setProjectDetails(prev => ({ ...prev, productCount: 3 }))
    }

    const decreaseProductCount = () => {
        projectDetails.productCount > 1 ?
            setProjectDetails(prev => ({ ...prev, productCount: prev.productCount - 1 })) :
            setProjectDetails(prev => ({ ...prev, productCount: 1 }))
    }

    return (
        <div className='product-main-container'>
            <p className='section-heading'>Product Count</p>
            <div className="room-count-container">
                <button onClick={decreaseProductCount}><LuCircleMinus /></button>
                <p>{projectDetails.productCount}</p>
                <button onClick={increaseProductCount}><LuCirclePlus /></button>
            </div>
        </div>
    )
}

export default Product