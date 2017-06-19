import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchComponent } from './components/search/search.component';
import { SummaryComponent } from './components/summary/summary.component';

const appRoutes:Routes=[
    {
      path:'',
      component:ReviewsComponent
    },
    {
      path:'search',
      component:SearchComponent
    },
    {
      path:'summary/:title',
      component:SummaryComponent
    }

];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);