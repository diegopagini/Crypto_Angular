import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.coinsService.dispatchGetAllCoins();
  }
}
