import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  weathers;
  city;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.httpService.getWeathers().subscribe(resp => {
    //   console.log(resp);
    //   this.weathers = resp["list"];
    // });
  }

  btnPressed() {
    this.httpService.getWeathers(this.city).subscribe(resp => {
      console.log(resp);
      this.weathers = resp["list"];
    });
  }
}
