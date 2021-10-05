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

//create Country
async function createCountry(req, res, next) {
  try {
    const newCountry = await Country.create({...req.body})
    
    return res.status(201).json(newCountry)
  }catch(err) {
    next(err)
  }
}

//get country
async function getCountry(req, res, next) {
  const id = req.params.id
  try {
    const country = await Country.findById(id)
    
    if (!country) {
      return res.status(404).send({message: 'Country does not exit'})
    }
    return res.status(200).json(country)
  } catch (err) {
    next(err)
  }
};

//delete country
async function deleteCountry(req, res, next) {
  try {
    const id = req.params.id
    
    const country = await Country.findById(id)
    
    if (!country) {
      return res.status(404).send({ message: 'Country does not exist'})
    }

    await country.remove()
    return res.status(200).send({ message: `${country} was deleted`})
    
  } catch (err) {
    next (err)
  }
}

//update country
async function updateCountry(req, res, next) {
  try {
    const id = req.params.id
    const country = await Country.findById(id)

    if (!country) {
      return res.status(404).send({ message: "Country does not exist"})
    }

    country.set(req.body)
    const savedCountry = await country.save()
    
    return res.status(200).json(savedCountry)
  } catch (err) {
  next(err)
}
}

export default { getAllCountries, getCountry, createCountry, deleteCountry, updateCountry }