import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./admin/admin-login/admin-login.module')
          .then(m => m.AdminLoginModule),
        canActivate: [AuthGuard],
        data: {
          shouldBeLoggedIn: false,
          otherRedirectTo: '/admin',
        }
      },
      {
        path: '',
        loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module')
          .then(m => m.AdminDashboardModule),
        data: {
          shouldBeLoggedIn: true,
          otherwiseRedirectTo: '/admin/login'
        },
        canLoad: [AuthGuard],
      }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
