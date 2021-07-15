const initialState = {
    itinerary: []
  };

  export default function itineraryReducer(state = initialState, action) {
    switch (action.type) {
      case "RETRIEVE_ITINERARY": {
        return {
          ...state,
          city: action.payload,
        };
      }
      default:
        return state;
    }
  }