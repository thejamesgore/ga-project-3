import Country from "../models/country.js";

// is the responsibility of the controller

async function getAllCountries(_req, res, next) {
  try {
    const countries = await Country.find()
    return res.status(200).json(countries)
  } catch (err) {
    next(err)
  };
}
//update

export default { getAllCountries }
