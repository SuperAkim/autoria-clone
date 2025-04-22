import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarCardComponent } from './car-card/car-card.component';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  cars: Car[] = [
    {
      id: 1,
      title: 'BMW X5 2020',
      price: 45000,
      year: 2020,
      mileage: 50000,
      location: 'Київ',
      imageUrl: 'assets/images/sports_car.jpg'
    },
    {
      id: 2,
      title: 'Audi Q7 2021',
      price: 55000,
      year: 2021,
      mileage: 30000,
      location: 'Львів',
      imageUrl: 'assets/images/sports_car.jpg'
    },
    {
      id: 3,
      title: 'Mercedes-Benz GLE 2019',
      price: 48000,
      year: 2019,
      mileage: 45000,
      location: 'Одеса',
      imageUrl: 'assets/images/sports_car.jpg'
    }
  ];
}
