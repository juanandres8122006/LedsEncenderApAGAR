import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(
      {"projectId":"ejercicio-f7062",
      "appId":"1:201379003635:web:aafd25d86efd099692cb86",
      "storageBucket":"ejercicio-f7062.appspot.com",
      "apiKey":"AIzaSyBfx2FfNsw-iaFy0uDmoLioyv6OT0lszMQ",
      "authDomain":"ejercicio-f7062.firebaseapp.com",
      "messagingSenderId":"201379003635"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
