import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitablesComponent } from './vegitables/vegitables.component';

const routes: Routes = [
  {
    path: 'fruits', component: FruitsComponent
  },
  {
    path: 'vegitables', component: VegitablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
