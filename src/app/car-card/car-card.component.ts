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
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      overflow: hidden;
    }

    .car-card:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .car-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .car-info {
      padding: 12px;
    }

    .car-info h3 {
      margin: 0 0 8px;
      font-size: 16px;
      font-weight: 500;
      color: #256799;
    }

    .price {
      font-size: 18px;
      font-weight: 700;
      color: #3c9806;
      margin: 8px 0;
    }

    .details {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      color: #777;
      font-size: 13px;
    }

    .details span {
      position: relative;
      padding-right: 8px;
    }

    .details span:not(:last-child):after {
      content: "•";
      position: absolute;
      right: -4px;
      color: #ddd;
    }
  `]
})
export class CarCardComponent {
  @Input({ required: true }) car!: Car;
}
