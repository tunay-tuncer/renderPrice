import React from 'react'
import { ProjectProvider } from "./context/ProjectContext";
import { PricingProvider } from "./context/PricingContext";
import ProjectDetails from './ProjectDetails';
import PriceShowcase from './PriceShowcase';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Container = () => {

    return (
        <div className="main-container">

            <div className='heading'>
                <h1>Rendering Price Calculation</h1>
                <p>Calculate the average price of your deisgns cost</p>
            </div>

            <div className="interface">
                <ProjectProvider>
                    <PricingProvider>

                        <ProjectDetails />
                        <PriceShowcase />

                    </PricingProvider>
                </ProjectProvider>
            </div>
        </div>
    )
}

export default Container