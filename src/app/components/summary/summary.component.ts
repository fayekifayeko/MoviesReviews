import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'summary',
  templateUrl: 'summary.Component.html'
})
export class SummaryComponent implements OnInit  {
  summary:string;
constructor(private _route:ActivatedRoute){

}
ngOnInit(){
        this._route.params
                   .map(params=>params['title'])
                   .subscribe((title)=>{
                    this.summary=title;
                   })
    }
}