import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products = Array.from(Array(50));
}
