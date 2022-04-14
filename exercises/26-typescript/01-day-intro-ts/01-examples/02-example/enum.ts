enum StudentsStatus {
  Active,
  Inactive,
  Paused,
}

let newStudentsStatus: StudentsStatus = StudentsStatus.Inactive;

console.log(newStudentsStatus);

enum StatusCodes {
  OK = 400,
  BadRequest,
  Unauthorizated,
  PaymentRequired,
  Forbiden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];

enum directionsGamePad {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}
