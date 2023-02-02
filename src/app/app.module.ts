import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './home/navigation-bar/navigation-bar.component';
import { AngularMaterialModule } from './material.module';
import { MenuNavigationTreeComponent } from './home/menu-navigation-tree/menu-navigation-tree.component';
import { BaseSectionComponent } from './home/base-section/base-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseSectionComponent,
    NavigationBarComponent,
    MenuNavigationTreeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
