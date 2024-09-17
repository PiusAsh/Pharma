import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCentersComponent } from './event-centers/event-centers.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'event-centers',
    pathMatch: 'full',
  },

  {
    path: 'event-centers',
    component: EventCentersComponent,
    // data: { title: 'Dashboard' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
