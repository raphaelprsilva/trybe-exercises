const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const helpers = require('../helpers/readWriteFile');

const {
  isAValidName,
  isValidInitials,
  isValidCountry,
} = require('../middlewares/teamsValidations');

router.post(
  '/',
  isAValidName,
  isValidInitials,
  isValidCountry,
  rescue(async (req, res) => {
    const newTeam = {
      ...req.body,
      initials: req.body.initials.toUpperCase(),
    };

    console.log('Tô no router post - newTeam:', newTeam);

    const team = await helpers.writeFileContent('./teams.json', newTeam);

    res.status(200).json(team);
  }),
);

module.exports = router;
