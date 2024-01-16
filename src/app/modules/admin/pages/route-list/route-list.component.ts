import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, AfterViewInit, ViewChild, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import {MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { TranslocoModule } from '@ngneat/transloco';
import {FormsModule} from '@angular/forms';
import { RouteListService } from './route-list.service';

@Component({
  selector: 'route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TranslocoModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    NgClass
  ],
})
export class RouteListComponent implements AfterViewInit, OnInit {
  formFieldHelpers: string[] = [''];
  data: any;
  constructor(
    private _routeService: RouteListService,
    private _router: Router,
    private _liveAnnouncer: LiveAnnouncer
  ) {
  }
  displayedColumns: string[] = ['position', 'name', 'weight','status','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  redirectToAddRoute() {
    this._router.navigate(['/add-route']);
}
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  status:string;
  actions:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079,status:"",actions:"" },
  { position: 2, name: 'Helium', weight: 4.0026,status:"",actions:"" },
  { position: 3, name: 'Lithium', weight: 6.941,status:"",actions:"" },
  { position: 4, name: 'Beryllium', weight: 9.0122,status:"",actions:"" },
  { position: 5, name: 'Boron', weight: 10.811,status:"",actions:"" },
  { position: 6, name: 'Carbon', weight: 12.0107,status:"",actions:"" },
  { position: 7, name: 'Nitrogen', weight: 14.0067,status:"",actions:""},
  { position: 8, name: 'Oxygen', weight: 15.9994,status:"",actions:"" },
  { position: 9, name: 'Fluorine', weight: 18.9984,status:"",actions:"" },
  { position: 10, name: 'Neon', weight: 20.1797,status:"",actions:""},
  { position: 11, name: 'Sodium', weight: 22.9897,status:"",actions:""},
  { position: 12, name: 'Magnesium', weight: 24.305,status:"",actions:""},
  { position: 13, name: 'Aluminum', weight: 26.9815,status:"",actions:"" },
  { position: 14, name: 'Silicon', weight: 28.0855,status:"",actions:""},
  { position: 15, name: 'Phosphorus', weight: 30.9738,status:"",actions:""},
  { position: 16, name: 'Sulfur', weight: 32.065, status:"",actions:"" },
  { position: 17, name: 'Chlorine', weight: 35.453, status:"",actions:""},
  { position: 18, name: 'Argon', weight: 39.948, status:"",actions:""},
  { position: 19, name: 'Potassium', weight: 39.0983,status:"",actions:"" },
  { position: 20, name: 'Calcium', weight: 40.078,status:"",actions:""},
];


