function describeCity(city: string, country = "Pakistan"): void {
    console.log(`'${city} is in ${country}'.`);
  }
  
  describeCity("Karachi");
  describeCity("London", "UK");
  describeCity("Tokyo", "Japan");
  