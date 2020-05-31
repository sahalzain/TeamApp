import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/app-manager/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MessageBoxDialog } from './core/app-manager/components/items/messagebox/messagebox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoxDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    MessageBoxDialog,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
