// How we get the places(from database or otherwise)

import Country from "../models/country";

// is the responsibility of the controller

async function getAllCountries(req, res, next) {
  try {
    const countries = await Country.find()
    return res.status(200).json(countries)
  } catch (err) {
    next(err)
  };
}
//update

export default { getAllCountries }
