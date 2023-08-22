import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterMealsComponent } from './components/filter-meals/filter-meals.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'meals/:category', component: FilterMealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
