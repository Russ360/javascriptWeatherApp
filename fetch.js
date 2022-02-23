class Fetch {
    async getCurrent(input) {
      const myKey = "364f99b616e801e1c9fde70100f48986";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }