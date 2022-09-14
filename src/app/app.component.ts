import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cities = ['Barcelona', 'Madrid', 'Lima'];
  name!:string;
  selection ! :string;
  criteria = '';
  title = 'ciclo_vida';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = "";
  }

  onSearch(): void {
    console.log('onSearch');
  }

}