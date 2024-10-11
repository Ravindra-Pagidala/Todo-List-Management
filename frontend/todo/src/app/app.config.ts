import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes), 
    provideClientHydration(),
      
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpIntercepterBasicAuthService,
      multi:true
    },
    // provideHttpClient(withInterceptors([httpBasicAuthServiceInterceptor])),
  ],
};


// import provideHttpClient to make use of it in service and components
