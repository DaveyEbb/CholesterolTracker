import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page, Platform,  Storage, LocalStorage} from 'ionic-angular';
import {WeatherService} from '../../services/WeatherService';
import{HourForecast} from '../../entities/HourForecast';
import{DailyForecast} from '../../entities/DailyForecast';
import{ChartComponent} from '../../components/ChartComponent';
 
@Page({
  templateUrl: 'build/pages/home/home.html',
  providers:[WeatherService],
  directives:[ChartComponent]
})


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  // notre service
  public weather: WeatherService;
 
  public hoursForecast: HourForecast[];
  public dailyForecast: DailyForecast[];
 
  public temp:number[];
  public hours:string[];
  public searchCity:string;
  public citySelected:string;
  public storage:Storage;
 
  public currentWeather:number;
  public currentWeatherIcon:string;
  public currentWeatherDate:Date;
  
 constructor(platform: Platform, weather: WeatherService) {
 
    this.weather = weather;
    this.storage = new Storage(LocalStorage);
 
    platform.ready().then(() => {
      
    // on récupère la ville
      this.storage.get('city').then((city) => {
        if(city){
          this.citySelected = city;
          this._getWeather(city);
        }
      });
 
    });
  }

/**
  * Get city
  */
  public getCity(city):void{
    this.citySelected = city;
    this._getWeather(city);
  }
 
  private _getWeather(city:string):void{
 
    // récupère la météo horaire 
    this.weather.getWeather('forecast?q=', city).subscribe(data => {
      
      let forecasts = this._getHoursForecast(data.list);
 
      let d:number[] = [];
      let l:string[] = [];
 
      for(let f of forecasts){
        d.push(f.temp);
        l.push(f.hour+'h');
      }
 
      // les températures pour le graphique
      this.temp = d;
      
      // les heures pour le graphique
      this.hours = l;
      
      // on sauvegarde la ville dans le local storage
      this.storage.set('city', city);
    });
 
    // récupère la météo courante
    this.weather.getWeather('weather?q=', city).subscribe(data => {
        this.currentWeather = Math.round(data.main.temp);
        this.currentWeatherIcon = data.weather[0].icon;
        this.currentWeatherDate = new Date(data.dt*1000);
    });
 
    // récupère la météo journalière
    this.weather.getWeather('forecast/daily?q=', city).subscribe(data => {
      this.dailyForecast = this._getDailyForecast(data.list);
    });
  }

  /**
  * We take the first seven days
  */
  private _getDailyForecast(data:any[]):DailyForecast[]{
 
    let array:DailyForecast[] = [];
 
    for(let i = 0 ; i < data.length ; i++){
      let weather = new DailyForecast();
 
      weather.maxTemp = Math.round(data[i].temp.max);
      weather.minTemp = Math.round(data[i].temp.min);
      weather.icon = data[i].weather[0].icon;
      weather.date = new Date(data[i].dt*1000);
 
      array.push(weather);
    }
 
    return array;
  }

  /**
  * We take the first seven hours
  */
  private _getHoursForecast(data:any[]):HourForecast[]{
    
    let array:HourForecast[] = [];
     
    // on parcours les données provenant du serveur
    for(let i = 0 ; i < data.length ; i++){
     
       let weather = new HourForecast();
       weather.hour = new Date(data[i].dt*1000).getHours();
       weather.temp = Math.round(data[i].main.temp);
       array.push(weather);
    }
    return array;
  }


}
