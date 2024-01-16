import { MatTabsModule } from '@angular/material/tabs';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { DashboardService } from 'app/modules/admin/pages/dashboard/dashboard.service';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, NgClass, CurrencyPipe,MatFormFieldModule, MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,]
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(
    private _dashboardService: DashboardService,
    private _router: Router,
  ) {
  }


  ngOnInit(): void {
  }


}
