const keyApi = '8dc756c0423cac4346ce3ea6b072d38f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKeyUrl = "&units=metric&APPID=8dc756c0423cac4346ce3ea6b072d38f";

const getWeatherData = async (event) => {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const entireUrl = (baseUrl + zip + apiKeyUrl);
    const response = await fetch(entireUrl)
    try {
      const data = await response.json();
      console.log(data);
      postData('http://localhost:8000/add', { date: today, city: data.name, temperature: data.main.temp, userResponse: feelings });
      getData('http://localhost:8000/all');
      return data;
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const entireUrl = (baseUrl + formText + apiKeyUrl);

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    const response = fetch(entireUrl)
    try {
      const data = response.json();
      document.getElementById('results').innerHTML = `The temperature in your city is ${data.main.temp}`;
      alert(`The temperature in your city is ${data.main.temp}`);
      // return data;
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

export { handleSubmit }
