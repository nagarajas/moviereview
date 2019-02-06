import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatSelectModule, MatCardModule, MatBadgeModule, MatIconModule, MatDividerModule,MatDatepickerModule, MatGridListModule } from "@angular/material";
import { MovieComponent } from './movie/movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    MatSelectModule, 
    MatCardModule,
    MatBadgeModule, 
    MatIconModule, 
    MatDividerModule,
    MatDatepickerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
