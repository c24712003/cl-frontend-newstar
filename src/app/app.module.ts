import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardLinkService, HeroService, MessageService } from './services/index';
import { MessagesComponent } from './messages/messages.component';
import { BonusPointModule } from './bonus-point/bonus-point.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material.module';
import { ConfirmTemplateDialog } from './dialog/confirm-template/confirm-template.dialog';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BonusPointModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    ConfirmTemplateDialog
  ],
  providers: [HeroService, DashboardLinkService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
