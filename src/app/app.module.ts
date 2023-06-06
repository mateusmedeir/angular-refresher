import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { FormsModule } from '@angular/forms';
import { AppRountingModule } from './app-routing.module';
import { PersonsService } from './persons/persons.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
