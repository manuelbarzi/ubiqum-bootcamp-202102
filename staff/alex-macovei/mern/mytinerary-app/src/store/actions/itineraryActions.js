import retrieveItinerary from "../../logic/retrieve-itinerary";

export function retrieveItineraries(city) {
  return (dispatch) => {
    retrieveItinerary(city)
      .then((itinerary) =>
        dispatch({
          type: "RETRIEVE_ITINERARY",
          payload: itinerary,
        }))
  }
};