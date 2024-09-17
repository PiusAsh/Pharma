import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutComponent } from './core/operation/layout/layout/layout.component';
import { AuthLayoutComponent } from './authentication/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },

  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'app',
        loadChildren: () =>
          import('./core/operation/operation.module').then(
            (m) => m.OperationModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
