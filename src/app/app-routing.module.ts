import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: "", component: CategorysComponent},
  {path: 'categorys', component: CategorysComponent, pathMatch: "full"},
  {path: 'categorys/:id', component: CategorysComponent, pathMatch: "full"},
  {path: 'products', component: ProductsComponent, pathMatch: "full"},
  {path: 'products/:category', component: ProductsComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
