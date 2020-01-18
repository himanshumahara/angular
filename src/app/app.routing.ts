


import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductListComponent} from '../pages/products/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports:[
    RouterModule.forRoot([
      {path: 'product-list', component:ProductListComponent},
       {path: '', component:ProductListComponent}
    ])
  ],
  exports:[RouterModule],
  providers:[],

})
export class AppRoutingModule {}