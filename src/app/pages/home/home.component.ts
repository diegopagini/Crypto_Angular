import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoinsService } from 'src/app/services/coins.service';
import { selectCoins } from 'src/app/store/selectors/coins.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coins$!: Observable<any>;

  constructor(private coinsService: CoinsService, private store: Store) {}

  ngOnInit(): void {
    this.coinsService.dispatchGetAllCoins();
    this.coins$ = this.store.select(selectCoins);

    this.coins$.subscribe(console.log);
  }
}
