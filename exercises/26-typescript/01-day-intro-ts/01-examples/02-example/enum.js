var StudentsStatus;
(function (StudentsStatus) {
    StudentsStatus[StudentsStatus["Active"] = 0] = "Active";
    StudentsStatus[StudentsStatus["Inactive"] = 1] = "Inactive";
    StudentsStatus[StudentsStatus["Paused"] = 2] = "Paused";
})(StudentsStatus || (StudentsStatus = {}));
var newStudentsStatus = StudentsStatus.Inactive;
console.log(newStudentsStatus);
