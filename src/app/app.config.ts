import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





import { routes } from './app.routes';
import { CommonModule } from '@angular/common';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};



