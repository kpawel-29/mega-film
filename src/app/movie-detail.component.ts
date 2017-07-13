import 'rxjs/add/operator/switchMap';
import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';

import {Movie}         from './movie';
import {MovieService}  from './movie.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;
    url: SafeResourceUrl;

    constructor(private movieService: MovieService,
                private route: ActivatedRoute,
                private location: Location,
                private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
            .subscribe((movie: Movie) => {
                this.movie = movie;
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(movie.link.replace('watch?v=', 'embed/'));
            });
    }

    goBack(): void {
        this.location.back();
    }

    setFav(movie: Movie): void {
        this.movieService.changeFav(movie.id);
        movie.fav = !movie.fav;
        this.movieService.update(movie);

    }

    getColor(movie: Movie): string {
        return (movie.fav) ? 'red-text' : 'gray-text';
    }

    edit(): void {

    }
}