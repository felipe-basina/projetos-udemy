import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';
import { AppComponent }  from './app.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList, AccountForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
