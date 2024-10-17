import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '' ,component: HomeComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'industries' , component: IndustriesComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: '**' , component: ErrorComponent
  }



];
