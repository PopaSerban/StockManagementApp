import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseSectionComponent } from './home/base-section/base-section.component';
import { NavigationBarComponent } from './home/navigation-bar/navigation-bar.component';

const routes: Routes = [
  {
    path:'*', component: BaseSectionComponent
  },
  {
    path:"product/dashboard", component: BaseSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
