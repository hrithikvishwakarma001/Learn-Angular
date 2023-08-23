import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FilterMealsComponent } from './components/filter-meals/filter-meals.component';
import { AboutMealsComponent } from './components/about-meals/about-meals.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuItemComponent, FilterMealsComponent, AboutMealsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
