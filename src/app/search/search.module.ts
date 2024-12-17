import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SearchComponent,
    SearchComponentComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class SearchModule { }
