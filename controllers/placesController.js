// How we get the places(from database or otherwise)
// is the responsibility of the controller
export const getAllPlaces = (request, response) => {
  return response.send(['UK, America, Australia'])
}


