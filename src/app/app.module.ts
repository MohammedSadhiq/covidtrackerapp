import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './components/india/india.component';
import { TnComponent } from './components/tn/tn.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './components/world/world.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes:Routes=[
  {path:"", component:IndiaComponent},
  {path:"tamil",component:TnComponent},
  {path:"contact",component:ContactsComponent},
  {path:"world",component:WorldComponent},
  {path:'**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    TnComponent,
    ContactsComponent,
    WorldComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
