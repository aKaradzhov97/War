import requester from "../utils/requester";

function updateUserData(data) {
    return requester.update("user", sessionStorage.getItem("userId"), "kinvey", data);
}

export default {
    updateUserData
}