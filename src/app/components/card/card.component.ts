import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/models/coin.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() coin!: Observable<Coin>;
}
