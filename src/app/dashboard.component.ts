import {Component, OnInit, ViewContainerRef} from '@angular/core';

import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    movies: Movie[] = [];

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.movieService.getMovies()
            .then((movies: Movie[]) => {
                this.movies = movies;
            })
    }

    test(): void {
        this.movieService.getInit()
            .then((item: object) => {
                // alert('item: ' + item.gaId );
                console.log(item);
            })
    }
}
