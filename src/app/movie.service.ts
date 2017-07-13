import {Movie} from './movie';
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

    private moviesUrl = 'api/movies'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getInit(): Promise<Movie> {

        return this.http.get('https://sawpe.pl/api/init/')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }



    getMovies(): Promise<Movie[]> {
        return this.http.get(this.moviesUrl)
            .toPromise()
            .then((response) => response.json().data as Movie[])
            .catch(this.handleError);
    }

    getMovie(id: number): Promise<Movie> {
        const url = `${this.moviesUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Movie)
            .catch(this.handleError);
    }

    changeFav(id: number): void {
        this.getMovie(id)
            .then((movie: Movie) => {
                movie.fav = !movie.fav;
            });
    }

    update(movie: Movie): Promise<Movie> {
        const url = `${this.moviesUrl}/${movie.id}`;

        return this.http
            .put(url, JSON.stringify(movie), {headers: this.headers})
            .toPromise()
            .then(() => movie)
            .catch(this.handleError);
    }



    // setRating(rating: number, id: number): Promise<void> {
    //     return this.getMovie(id).then((movie: Movie) => {
    //         movie.rating = rating;
    //     });
    // }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        alert('An error occurred ' + error);

        return Promise.reject(error.message || error);
    }

}
