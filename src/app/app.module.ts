import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/common/card/card.component';
import { MissionServiceService } from './services/mission-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MissionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
