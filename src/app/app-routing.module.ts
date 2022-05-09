import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DatabasesnapshotComponent } from './databasesnapshot/databasesnapshot.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'databasesnapshot', component: DatabasesnapshotComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
