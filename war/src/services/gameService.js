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
            "name": "oreMine"
        },
        "oilFields": {
            "level": 1,
            "name": "oilField"
        },
        "houses": {
            "level": 1,
            "name": "house"
        },
        "airPowerPlant": {
            "level": 1,
            "name": "airPowerPlant"
        },
        "hydroPowerPlant": {
            "level": 1,
            "name": "hydroPowerPlant"
        },
        "infrastructure": {
            "level": 1,
            "name": "infrastructure"
        },
        "oreWarehouse": {
            "level": 1,
            "name": "oreWarehouse"
        },
        "oilWarehouse": {
            "level": 1,
            "name": "oilWarehouse"
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