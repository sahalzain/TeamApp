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
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MessageBoxDialog } from './core/app-manager/components/items/messagebox/messagebox.component';
import { AppUtilityService } from './core/app-manager/services/app.utility.service';


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
    NgxGraphModule
  ],
  entryComponents: [
    MessageBoxDialog,
  ],
  providers: [AppUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
