// done: Define a City class with name and id properties
import fs from "node:fs/promises";

class City {
  cityName: string;

  constructor(cityName: string){
    this.cityName = cityName;
  }

}

// TODO: Complete the HistoryService class
class HistoryService {
  // done: Define a read method that reads from the searchHistory.json file
  private async read() {
    return await fs.readFile("../db/searchHistory.json", "utf8")
  }
  // done: Define a write method that writes the updated cities array to the searchHistory.json file
private async write(cities: City[]) {
  return await fs.writeFile('../db/searchHistory.json', JSON.stringify(cities))
}
  // done Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    let cities = await this.read()
    let parsedCities: City[]
    try {
      parsedCities = [].concat(JSON.parse(cities))
    }
    catch (err) {
      parsedCities = []
    }
    return parsedCities
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    let cities = await this.getCities()
    const newCity: City = {cityName: city}
    cities = [...cities, newCity]
    await this.write(cities) 
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
