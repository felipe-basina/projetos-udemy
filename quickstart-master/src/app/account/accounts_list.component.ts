import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component, Input, Output, EventEmitter } from '@angular/core';
import {Account} from './account.model';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //imports: [ BrowserModule ],
  //declarations: [ AccountsList, Account ],
  //exports: [ AccountsList ],
})

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})

export class AccountsList {
  //private _selected:Array<boolean> = [false, false];

  // Decorators
  @Input('accounts') _accounts:Array<Account>;

  @Output('delete') delete = new EventEmitter<Number>();

  private _remove(index:number) {
    this.delete.emit(index);
  }

  /*private select(index:number) {
    this._selected[index] = !this._selected[index]
  }*/
}
