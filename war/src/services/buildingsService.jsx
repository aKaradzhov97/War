import requester from "../utils/requester";

function getUserBuildings(userId) {
    return requester.get("user", userId, "kinvey");
}

function getBuildingsData(collection) {
    return requester.get("appdata", collection, "kinvey");
}

export default {
    getUserBuildings,
    getBuildingsData
}