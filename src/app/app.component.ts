import { Component } from '@angular/core';
import { ReviewsService } from './services/reviews.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[ReviewsService]
})

export class AppComponent  { name = 'Angular'; }
