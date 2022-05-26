import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import{ MatButtonModule } from '@angular/material/button';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatInputModule } from '@angular/material/input';
import{ MatTabsModule } from '@angular/material/tabs';
import{ MatTableModule } from '@angular/material/table';
import{ MatIconModule } from '@angular/material/icon';
import{ MatCardModule } from '@angular/material/card';
import{ MatDialogModule } from '@angular/material/dialog';
import{ MatPaginatorModule } from '@angular/material/paginator';
import{ MatSnackBarModule } from '@angular/material/snack-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import { SorterComponent } from './sorter/sorter.component';
import { SorterService } from './sorter.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SorterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    PersonService,
    SorterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
