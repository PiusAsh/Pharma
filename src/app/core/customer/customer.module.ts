import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerSettingsComponent } from './customer-settings/customer-settings.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerSettingsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
