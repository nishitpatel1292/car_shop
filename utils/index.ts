export async function fetchCars(){
   const headers = {
		'X-RapidAPI-Key': '31fa5d0a1fmshf0532532d0ec5b2p106638jsn299a498c70bc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
        headers:headers,
    });

    const result = await response.json();

    return result;
}