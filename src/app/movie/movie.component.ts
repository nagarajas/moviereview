import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MovieSearch } from '../movieSearch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieSearchResult:MovieSearch[];
  movie: Movie;
  searchtext:string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  searchMovies()
  {
     this.movieService.searchMovies(this.searchtext).subscribe(res => {
       this.movieSearchResult = res;
       console.log(this.movieSearchResult);
     });
  }

  showDetails(imdbID: string)
  {
     //this.router.navigate(['/moviedetails', { id : imdbID }]);
  }
}
