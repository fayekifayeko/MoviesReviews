import { Component } from '@angular/core';
import {Review} from '../../review'
import { ReviewsService } from '../../services/reviews.service';

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: 'search.Component.html'
})
export class SearchComponent  {
  searchStr:string;
   reviews:Review[];
    constructor(private _reviewsService:ReviewsService){

    }
    searchMovie(){
        this._reviewsService.searchMovie(this.searchStr)
                             .subscribe(res => {
                                 console.log(res.results);
                                 this.reviews=res.results;
                                 console.log('....................');
                                 console.log(this.reviews);
                             })
    }
   
}