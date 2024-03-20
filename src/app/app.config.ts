import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     HttpClientModule
//   ],
//   exports: [
//     HttpClientModule
//   ]
// })

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};



