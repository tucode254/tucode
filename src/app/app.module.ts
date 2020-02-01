import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HeroComponent } from './shared/layout/hero/hero.component';
import { PagecontentComponent } from './shared/layout/pagecontent/pagecontent.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { PageloaderComponent } from './shared/layout/pageloader/pageloader.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactModule } from './pages/contact/contact.module';
import { HomeModule } from './pages/home/home.module';
import { SocialComponent } from './shared/layout/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PagecontentComponent,
    FooterComponent,
    PageloaderComponent,
    HomeComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContactModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
