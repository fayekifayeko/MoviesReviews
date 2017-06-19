import { Component,OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import {Review} from '../../review'
@Component({
  moduleId:module.id,
  selector: 'reviews',
  templateUrl: 'reviews.Component.html'
})
export class ReviewsComponent implements OnInit  {
    reviews:Review[];
    constructor(private _reviewsService:ReviewsService){

    }
    getReviews(){
        this._reviewsService.getReviews()
                             .subscribe(res => {
                                 console.log(res.results);
                                 this.reviews=res.results;
                                 console.log('....................');
                                 console.log(this.reviews);
                             })
    }
    ngOnInit(){
        console.log('hiiiiii');
        this.getReviews();
    }
}