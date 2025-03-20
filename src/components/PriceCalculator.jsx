

const PriceCalculator = (projectDetails, setProjectDetails, setPrice, setPriceWoTax) => {

    if (!projectDetails) return;

    let basePrice = 10000; // Default base price

    switch (projectDetails.project) {
        case "Interior":
            basePrice = 5000;
            break;
        case "Exterior":
            basePrice = 10000;
            break;
        case "Product":
            basePrice = 5000;
            break;
        case "Material":
            basePrice = 3000;
            break;
        default:
            basePrice = 10000;
    }

    if (projectDetails.resolutionValue === "1080P") basePrice *= 1.2;
    if (projectDetails.resolutionValue === "4K") basePrice *= 1.5;
    if (projectDetails.resolutionValue === "6K") basePrice *= 1.75;

    if (projectDetails.complicationLevel === "Medium") basePrice *= 1.25;
    if (projectDetails.complicationLevel === "High") basePrice *= 1.5;

    if (projectDetails.project === "Interior") {
        switch (projectDetails.interiorStyle) {
            case "Modern":
                basePrice = basePrice;
                break;
            case "Clasic":
                basePrice *= 1.5;
                break
            case "Contemporary":
                basePrice *= 1.25;
                break
            case "Industrial":
                basePrice *= 1.15;
                break;
        }

        basePrice *= (projectDetails.roomCount) * 0.1 + 1

        basePrice *= (projectDetails.totalArea / 200) + 1
    }

    if (projectDetails.project === "Exterior") {
        switch (projectDetails.exteriorStyle) {
            case "Apartment":
                basePrice *= 1.25
                break;
            case "Apartment Complex":
                basePrice *= 2
                break;
            case "Commercial":
                basePrice *= 1.25
                break;
        }
    }

    switch (projectDetails.outputFormat) {
        case "360°":
            basePrice *= 1.25
            break;
        case "VR":
            basePrice *= 1.25
            break;
        case "Animation":
            basePrice *= 2
        default:
            break;
    }


    basePrice += projectDetails.revisionCount * (basePrice * 0.05);
    basePrice += projectDetails.renderCount * (basePrice * 0.1);

    // Round the final price
    const finalPrice = Math.round(basePrice / 50) * 50;
    const finalPriceWoTax = Math.round(finalPrice * 0.8); // 20% tax

    // **Update PricingContext**
    setPrice(finalPrice);
    setPriceWoTax(finalPriceWoTax);

    // **Also update `projectDetails.basePrice` if necessary**
    if (projectDetails.basePrice !== finalPrice) {
        setProjectDetails(prev => ({ ...prev, basePrice: finalPrice }));
    }

};

export default PriceCalculator;
