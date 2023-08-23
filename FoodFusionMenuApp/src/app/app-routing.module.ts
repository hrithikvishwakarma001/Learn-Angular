import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterMealsComponent } from './components/filter-meals/filter-meals.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutMealsComponent } from './components/about-meals/about-meals.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'meals/:category', component: FilterMealsComponent },
  { path: 'about/:about', component: AboutMealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
