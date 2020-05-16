import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./admin/admin-login/admin-login.module').then(m => m.AdminLoginModule)
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
