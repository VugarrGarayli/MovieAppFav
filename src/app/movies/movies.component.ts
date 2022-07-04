import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title: string = 'Movie List';
  movies: Movie[];
  popularMovies: Movie[];
  filteredMovies: Movie[];
  movieRepository: MovieRepository;
  valueFav: Movie[];
  filterText: string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.valueFav = this.movieRepository.getMovieFav();
    //this.movies.length=0;
    this.popularMovies = this.movieRepository.getPopularMovies();
  }
  ngOnInit() {}

  OnInputChange() {
    this.filteredMovies = this.filterText
      ? this.movies.filter(
          (m: Movie) =>
            m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 ||
            m.description.toLocaleLowerCase().indexOf(this.filterText) !== -1
        )
      : this.movies;
  }
  Change(item: any, btn: any) {
    item.isFavorite = !item.isFavorite;
    this.movieRepository.Update(item);
    if (!item.isFavorite) {
      btn.value = '♡';
    } else {
      btn.value = '';
    }
    this.valueFav = this.movieRepository.getMovieFav();
  }
  Stars(ii: number): string {
    var st = '';
    var forfor = ii / 2;
    if (ii % 2 == 1) {
      var r = ii - 1;
      forfor = r / 2;
    }
    for (var i = 0; i < forfor; i++) {
      st += '🌟';
    }
    return st;
  }
  addToList($event: any, item: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
    } else {
      $event.target.innerText = 'Add To List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }
  }
}
