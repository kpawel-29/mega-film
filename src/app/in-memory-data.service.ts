import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {Movie} from './movie';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies: Movie[] = [
            {
                id: 12,
                name: 'Movie #1',
                currency: '$',
                amount: '12',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/2',
                rating: 5,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 13,
                name: 'Movie #2',
                currency: '$',
                amount: '14',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/3',
                rating: 4,
                fav: true,
                link: 'https://www.youtube.com/watch?v=n4a_fZR0PJY'
            },
            {
                id: 14,
                name: 'Movie #3',
                currency: '$',
                amount: '15',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/4',
                rating: 3,
                fav: true,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 16,
                name: 'Movie #4',
                currency: '$',
                amount: '12',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/6',
                rating: 4,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 17,
                name: 'Movie #5',
                currency: '$',
                amount: '17',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/7',
                rating: 5,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 18,
                name: 'Movie #6',
                currency: '$',
                amount: '18',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/8',
                rating: 2,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 19,
                name: 'Movie #7',
                currency: '$',
                amount: '11',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/9',
                rating: 1,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            },
            {
                id: 20,
                name: 'Movie #8',
                currency: '$',
                amount: '9',
                categories: ['horror', 'lorem-horror'],
                img: 'http://lorempixel.com/300/216/city/10',
                rating: 2,
                fav: false,
                link: 'https://www.youtube.com/watch?v=7ap8hvNjrnA'
            }
        ];

        return {movies};
    }
}