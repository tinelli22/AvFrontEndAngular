import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from '../search/search.module';
import { HeaderComponent } from './header.component';
import { OptionsModule } from '../options/options.module';
import { SearchmobileModule } from '../searchmobile/searchmobile.module';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SearchModule,
    OptionsModule,
    SearchmobileModule,
    MenuModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
