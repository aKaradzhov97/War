import $ from "jquery";
import requester from "../utils/requester";

function getUserBuildings(userId) {
    return requester.get("user", userId, "kinvey");
}



export default {
    getUserBuildings,
}