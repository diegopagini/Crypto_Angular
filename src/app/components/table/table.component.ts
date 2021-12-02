import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Coin } from 'src/app/models/coin.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() coins$!: Observable<Coin[]>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Coin>();
  displayedColumns: string[] = [
    'exchange_id',
    'website',
    'name',
    'data_start',
    'data_end',
    'data_quote_start',
    'data_quote_end',
    'data_symbols_count',
    'volume_1hrs_usd',
    'volume_1day_usd',
    'volume_1mth_usd',
    'data_orderbook_start',
    'data_orderbook_end',
    'data_trade_start',
    'data_trade_end',
  ];

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.coins$.pipe(filter((coins) => !!coins)).subscribe((data: Coin[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: KeyboardEvent | any): void {
    this.dataSource.filter = filterValue.target?.value.trim().toLowerCase();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  onClickRow(coin: Coin) {
    this.coinsService.dispatchGetCoin(coin);
  }
}
