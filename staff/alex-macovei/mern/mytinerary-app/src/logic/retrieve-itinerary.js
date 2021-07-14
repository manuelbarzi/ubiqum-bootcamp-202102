export default async function (city) {
    const response = await fetch("http://localhost:5000/cities/"+city);

    if (response.ok) {
        const itinerary = await response.json();

        return itinerary
    }

    throw new Error('could not retrieve itinerary')
}