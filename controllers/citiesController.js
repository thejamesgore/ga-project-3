import Country from "../models/country.js";

// Create City
async function createCity(req, res, next) {
  try {
    const { id } = req.params;
    const getCountry = await Country.findById(id);

    if (!getCountry) {
      return res.status(404).send({ message: "Country does not exist" });
    }

    const newCity = {
      ...req.body,
    };

    getCountry.city.push(newCity);
    const savedCity = await getCountry.save();
    console.log(savedCity);

    return res.status(201).json(savedCity);
  } catch (err) {
    next(err);
  }
}

// Delete City

async function deleteCity(req, res, next) {
  try {
    const id = req.params.id;

    const city = await City.findByIdAndDelete(id);

    if (!city) {
      return res.status(404).send({ message: `City doesn't exist` });
    }

    return res.status(200).json(city);
  } catch (err) {
    next(err);
  }
}

// Get All Cities For User

export default { createCity, deleteCity };
