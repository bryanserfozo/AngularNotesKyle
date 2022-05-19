import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { EmployeeNamesComponent } from './employee-names/employee-names.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    SquarePipe,
    EmployeeNamesComponent,
    EmployeeListComponent,
    ObservableComponent,
    SubjectsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
