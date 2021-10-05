 import City from '../models/cities.js'

 // Create City
async function createCity(req, res, next) {
    try {
        const newCity = await City.create(req.body)

        await City.updateMany(
            { _id: newCity.country },
            { $push: {cities: newCity._id }}
        )

        return res.status(201).json(newCity)
    } catch (err) {
        next(err)
    }
}




// Delete City

async function deleteCity(req, res, next) {
    try {
        
        const id = req.params.id
        
        const city = await City.findByIdAndDelete(id)

        if (!city) {
            return res.status(404).send({ message: `City doesn't exist`})
        }

        return res.status(200).json(city)

    } catch (err){
        next (err)
    }
}

// Get All Cities For User

export default { createCity, deleteCity }