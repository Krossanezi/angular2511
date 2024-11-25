import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importando o módulo de roteamento
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DiscountsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importando o módulo de roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
