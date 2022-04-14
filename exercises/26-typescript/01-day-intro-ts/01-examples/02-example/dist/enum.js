"use strict";
var StudentsStatus;
(function (StudentsStatus) {
    StudentsStatus[StudentsStatus["Active"] = 0] = "Active";
    StudentsStatus[StudentsStatus["Inactive"] = 1] = "Inactive";
    StudentsStatus[StudentsStatus["Paused"] = 2] = "Paused";
})(StudentsStatus || (StudentsStatus = {}));
let newStudentsStatus = StudentsStatus.Inactive;
console.log(newStudentsStatus);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 400] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 401] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorizated"] = 402] = "Unauthorizated";
    StatusCodes[StatusCodes["PaymentRequired"] = 403] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbiden"] = 404] = "Forbiden";
    StatusCodes[StatusCodes["NotFound"] = 405] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGHT"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
