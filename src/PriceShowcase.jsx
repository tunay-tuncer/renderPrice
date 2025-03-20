import { useState, useEffect, useContext } from "react";
import { ProjectContext } from "./context/ProjectContext";
import { PricingContext } from "./context/PricingContext";
import PriceCalculator from "./components/PriceCalculator";

const PriceShowcase = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);
    const { price, setPrice, priceWoTax, setPriceWoTax } = useContext(PricingContext)

    const getBaseBriefItems = () => [
        { heading: "Project Type", value: projectDetails.project },
        { heading: "Resolution", value: projectDetails.resolutionValue },
        { heading: "Complexity", value: projectDetails.complicationLevel },
        { heading: "Revision Count", value: projectDetails.revisionCount },
        { heading: "Render Count", value: projectDetails.renderCount },
        { heading: "Output Format", value: projectDetails.outputFormat }
    ];

    const [newBriefItems, setNewBriefItems] = useState(getBaseBriefItems());

    useEffect(() => {
        PriceCalculator(projectDetails, setProjectDetails, setPrice, setPriceWoTax);
    }, [projectDetails])

    useEffect(() => {
        let updatedBriefItems = getBaseBriefItems();

        if (projectDetails.project === "Interior") {
            updatedBriefItems.splice(1, 0, { heading: "Interior Style", value: projectDetails.interiorStyle });

            updatedBriefItems.splice(2, 0, { heading: "Room Count", value: projectDetails.roomCount })

            updatedBriefItems.splice(3, 0, { heading: "Total Area", value: `${projectDetails.totalArea} m²` })
        }

        if (projectDetails.project === "Exterior") {
            updatedBriefItems.splice(1, 0, { heading: "Exterior Style", value: projectDetails.exteriorStyle });
        }

        if (projectDetails.project === "Product") {
            updatedBriefItems.splice(1, 0, { heading: "Product Count", value: projectDetails.productCount });
        }

        setNewBriefItems(updatedBriefItems);
    }, [projectDetails]);

    return (
        <div className="price-main-container">
            <h2>Project Brief</h2>

            <ul className="brief-container">
                {newBriefItems.map((item, id) => (
                    <li key={id} className="brief-item">
                        <p className="brief-heading">{item.heading}</p>
                        <p className="brief-value">{item.value}</p>
                    </li>
                ))}
            </ul>

            <div className="price-text-container">
                <h2 className="price-description">Price Without Taxes </h2>
                <h2 className="main-price">{priceWoTax}</h2>
            </div>
            <div className="price-text-container">
                <h2 className="price-description">Total Price</h2>
                <h2 className="main-price">{price}</h2>
            </div>
        </div>
    );
};

export default PriceShowcase;
