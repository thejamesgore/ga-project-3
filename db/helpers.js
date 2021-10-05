import mongoose from "mongoose";



export function connectDb() {
  
  return mongoose.connect("mongodb://localhost/travel-app");
}

// Deletes all contents of a database
export function truncateDb() {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    return Promise.all(promises);
  }
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
// update
