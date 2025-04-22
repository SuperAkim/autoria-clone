import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Car } from '../interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="car-card">
      <img [src]="car.imageUrl" [alt]="car.title">
      <div class="car-info">
        <h3>{{ car.title }}</h3>
        <p class="price">{{ car.price | currency:'USD':'symbol':'1.0-0' }}</p>
        <div class="details">
          <span>{{ car.year }}</span>
          <span>{{ car.mileage }} км</span>
          <span>{{ car.location }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .car-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .car-card:hover {
      transform: translateY(-5px);
    }

    .car-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .car-info {
      padding: 16px;
    }

    .car-info h3 {
      margin: 0 0 8px;
      font-size: 18px;
      color: #333;
    }

    .price {
      font-size: 20px;
      font-weight: bold;
      color: #db5c4c;
      margin: 8px 0;
    }

    .details {
      display: flex;
      gap: 12px;
      color: #666;
      font-size: 14px;
    }
  `]
})
export class CarCardComponent {
  @Input({ required: true }) car!: Car;
}
