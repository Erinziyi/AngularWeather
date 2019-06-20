import { Injectable } from "@angular/core";
// 1-import
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  //2-inject
  constructor(public httpClient: HttpClient) {}

  //3- implement
  getWeather() {
    return this.httpClient.get(
      "http://api.openweathermap.org/data/2.5/forecast/daily?q=Kuala%20Lumpur&cnt=10&appId=9fd7a449d055dba26a982a3220f32aa2"
    );
  }
}
