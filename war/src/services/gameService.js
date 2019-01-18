function initializeUserData(userData) {
    const buildings = {
        "military": {
            "commandCenter": {
                "level": 0,
                "oreRequired": 4500,
                "areaRequired": 15,
                "electronicsRequired": 0,
                "timeRequired": 600
            },
            "barracks": {
                "level": 0,
                "oreRequired": 1500,
                "areaRequired": 10,
                "electronicsRequired": 0,
                "timeRequired": 180
            },
            "vehiclePlant": {
                "level": 0,
                "oreRequired": 5000,
                "areaRequired": 10,
                "electronicsRequired": 0,
                "timeRequired": 900
            },
            "aircraftPlant": {
                "level": 0,
                "oreRequired": 10000,
                "areaRequired": 35,
                "electronicsRequired": 0,
                "timeRequired": 5400
            },
            "bunkers": {
                "level": 0,
                "oreRequired": 10000,
                "areaRequired": 5,
                "electronicsRequired": 0,
                "timeRequired": 1500
            },
            "minefield": {
                "level": 0,
                "oreRequired": 10000,
                "areaRequired": 25,
                "electronicsRequired": 0,
                "timeRequired": 1800
            }
        },
        "hi-tech": {

        }
    };

    const buildingsCivil = {
        "oreMines": {
            "level": 1,
            "ore": 300,
            "area": 10,
            "electronics": 0,
            "buildTime": 180,
            "production": 250
        },
        "oilFields": {
            "level": 1,
            "ore": 300,
            "area": 10,
            "electronics": 0,
            "buildTime": 180,
            "production": 250
        },
        "houses": {
            "level": 1,
            "ore": 450,
            "area": 10,
            "electronics": 0,
            "buildTime": 300,
            "capacity": 25000
        },
        "airPowerPlant": {
            "level": 0,
            "ore": 15000,
            "area": 60,
            "electronics": 0,
            "buildTime": 15000,
            "production": 800
        },
        "hydroPowerPlant": {
            "level": 0,
            "ore": 30000,
            "area": 60,
            "electronics": 0,
            "buildTime": 27000,
            "production": 800
        },
        "infrastructure": {
            "level": 1,
            "ore": 10000,
            "area": 30,
            "electronics": 0,
            "buildTime": 3600,
        },
        "oreWarehouse": {
            "level": 1,
            "ore": 300,
            "area": 5,
            "electronics": 0,
            "buildTime": 180,
            "capacity": 10000
        },
        "oilWarehouse": {
            "level": 1,
            "ore": 300,
            "area": 5,
            "electronics": 0,
            "buildTime": 180,
            "capacity": 10000
        }
    };

    const technologies = [];
    const units = [];
    const resources = [];

    userData.buildingsCivil = buildingsCivil;
    return userData;
}

export default {
    initializeUserData
}