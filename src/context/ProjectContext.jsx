import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [projectDetails, setProjectDetails] = useState({
        project: "Interior",
        resolutionValue: "1080P",
        complicationLevel: "Medium",
        revisionCount: 2,
        renderCount: 1,
        outputFormat: "PNG",

        interiorStyle: "Modern",
        roomCount: 1,
        totalArea: 20,

        exteriorStyle: "Apartment",

        productCount: 1
    });

    return (
        <ProjectContext.Provider value={{ projectDetails, setProjectDetails }}>
            {children}
        </ProjectContext.Provider>
    );
};
