import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
 
@Injectable()
export class WeatherService {
  
  // clé récupérée dans OpenWeatherMap
  private _appid = '8e3a6a4ea751c2eb4debcd5d2c95c6c5';
 
  constructor(private http: Http){}
  
  // Get data
  public getWeather(url: string, city: string):Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/'+url+city+'&mode=json&units=metric&APPID='+this._appid)
      .map(hours=>hours.json());
  }

}