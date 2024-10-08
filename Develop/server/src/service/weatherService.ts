import dotenv from 'dotenv';
dotenv.config();

// DONE: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object
class Weather {
  cityName: string;
  dt: number;
  temp: number;
  humidity: number;
  wind_speed: number;

  constructor(
    cityName: string,
    dt: number,
    temp: number,
    humididty: number,
    wind_speed: number
  ) {
    this.cityName = cityName;
    this.dt = dt;
    this.temp = temp;
    this.humidity = humidity;
    this.wind_speed = this.wind_speed;
  }
}
// TODO: Complete the WeatherService class
class WeatherService {
  private baseURL?: string;
  private apiKey?: string;
  private cityName: string;
  // done: Define the baseURL, API key, and city name properties
  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.cityName = '';
  }
async getWeatherForCity(city: string) {
  try {
    const response = await fetch(
      `${this.baseURL}data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
    const data = await response.json();
    console.log(data);
  }
}
}

  // // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) Promise<Coordinates> {
  //   const url = this.buildGeocodeQuery(query);
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error('Failed to pull location data.');
  //   }
  //   const data = await response.json();
  //   return this.destructureLocationData(data)
  // }
  // // done: Create destructureLocationData method
  // private destructureLocationData(locationData: any[]): Coordinates {
  //   const { lat, lon } = locationData[0];
  //   return { lat, lon };
  // }
  // // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {
  //   return `${}`
  // }
  // // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {
  //   return `${}`
  // }
  // // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData(): Promise<Coordinates> {
  // return await this.fetchLocationData(this.cityName);
  // }
//   // TODO: Create fetchWeatherData method
// private async fetchWeatherData(coordinates: Coordinates) {}
//   // TODO: Build parseCurrentWeather method
// private parseCurrentWeather(response: any) {}
//   // TODO: Complete buildForecastArray method
// private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
//   // TODO: Complete getWeatherForCity method
//  async getWeatherForCity(city: string) {}
// }

export default new WeatherService();
