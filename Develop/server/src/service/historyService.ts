// TODO: Define a City class with name and id properties
import fs, { readFile } from "node:fs";

class City {
  private baseURL?: string;

  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
  }

}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    fs.readFile("../db/searchHistory.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      return data;
    });
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
private async write(cities: City[]) {
  fs.writeFile('../dp/searchHistory.json', JSON.stringify(cities), err => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully');
    }
  });
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    let cities = await this.read()
    return cities
  };
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
