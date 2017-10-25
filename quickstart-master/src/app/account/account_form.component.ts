import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Account} from './account.model';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:      [ BrowserModule ],
})

@Component({
  selector: 'account-form',
  templateUrl: 'app/account/account_form.component.html',
  styleUrls: ['app/account/account_form.component.css']
})

export class AccountForm {

  @Output() created = new EventEmitter<Account>();
  @Input() error:string;
  @ViewChild('form') form:ElementRef;

  private createAcc(titleEl:any, descEl:any, balEl:any) {
    var newAccount:Account = new Account(0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);
    /*titleEl.value = "";
    descEl.value = "";
    balEl.value = 0;*/
  }

  public resetForm() {
    this.form.nativeElement.reset();
  }

}
