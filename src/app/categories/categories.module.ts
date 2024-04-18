import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { CategoriesComponent } from './categories.component';


@NgModule({
  declarations: [
    FruitsComponent,
    VegitablesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule {
  constructor() {
    console.log("loaded CategoriesModule")
  }
}
