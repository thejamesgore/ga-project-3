import Place from '../models/place.js'
import { placesSeedData } from './placesSeedData.js'
import { connectDb, truncateDb, disconnectDb } from './helpers.js'

async function seedDatabase() {
try {
    await connectDb()
    console.log('🤘🤘🤘🤘 CONNECTED TO DATABASE 🤘🤘🤘🤘')

    await truncateDb()
    console.log(`🔥🔥🔥🔥 Database dropped 🔥🔥🔥🔥`)

    const places = await Place.create(placesSeedData)
    console.log(`🤖🤖🤖🤖 ${places.length} places added to the database🤖🤖🤖🤖`)
} catch (err) {
    console.log(`🚨🚨🚨🚨 Something went wrong seeding the database`, err)
}

disconnectDb()
}

seedDatabase()

//update