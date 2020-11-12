import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmpanadasListComponent } from './empanadas-list/empanadas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'empanadas', pathMatch: 'full' },
  { path: 'empanadas', component: EmpanadasListComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
