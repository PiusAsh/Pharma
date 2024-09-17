import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout/layout.component';
import { EventCentersComponent } from './event-centers/event-centers.component';


@NgModule({
  declarations: [
   
  
    LayoutComponent,
    EventCentersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OperationRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class OperationModule {}
