function OreMinesConfig(buildingLevel, currentOreRequired) {
    let buildingData = {
        level: buildingLevel,
        ore: 300,
        area: 10,
        electronics: 0,
        buildTime: 180,
        production: 200,
    };

    buildingLevel = Number(buildingLevel);

    if (buildingLevel === 1) {
        buildingData.ore = buildingData.ore * buildingLevel * 1.15;
    } else {
        buildingData.ore = currentOreRequired * 1.15 * buildingLevel;
    }

    return buildingData;
}

export default {
    OreMinesConfig
}