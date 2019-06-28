import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherDetailComponent } from "./weather-detail/weather-detail.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
