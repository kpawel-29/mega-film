import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {MovieDetailComponent}  from './movie-detail.component';
import {MoviesComponent}      from './movies.component';
import {MovieService}          from './movie.service';

import {AppRoutingModule}     from './app-routing.module';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        MovieDetailComponent,
        MoviesComponent
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
