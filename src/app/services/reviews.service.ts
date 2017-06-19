import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService{
    private reviewsUrl:string;
    private searchUrl:string;
    constructor(private _http:Http){

    }
    getReviews(){
      this.reviewsUrl='https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+'api-key=30514b4aa3b640a4adf66da8e943a051';
       return this._http.get(this.reviewsUrl)
                         .map(res=>res.json());
    }

    searchMovie(searchStr:string){
       this.searchUrl='https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+'api-key=30514b4aa3b640a4adf66da8e943a051&query='+searchStr;
       return this._http.get(this.searchUrl)
                         .map(res=>res.json());
    }
}
