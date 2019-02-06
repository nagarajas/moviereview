import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MovieSearch } from './movieSearch';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private baseUrl:string = "http://www.omdbapi.com/";
    private apiKey:string ="d8747dde";

    constructor(private http: HttpClient) {      

    }

    searchMovies(searchkey: string): Observable<MovieSearch[]>
    {
      return this.http.get<MovieSearch[]>(this.getSearchUrl(searchkey));
    }

    getMovieDetails(imdbkey: string): Observable<Movie>
    {
      return this.http.get<Movie>(this.getMovieUrl(imdbkey));
    }

    private getSearchUrl(searchkey:string) {
      return this.baseUrl+"?s="+searchkey+"&apikey="+this.apiKey;
    }

    private getMovieUrl(imdbkey:string) {
      return this.baseUrl+"?i="+imdbkey+"&apikey="+this.apiKey;
    }
}
