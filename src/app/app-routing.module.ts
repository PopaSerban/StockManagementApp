import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BaseSectionComponent } from './home/base-section/base-section.component';
import { NavigationBarComponent } from './home/navigation-bar/navigation-bar.component';

const routes: Routes = [
  {path:'*', component: BaseSectionComponent},
  {path:"product/dashboard", loadChildren: () => import("src/app/product-dashboard-module/product-dashboard-module.module").then(m =>m.ProductDashboardModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
