import { Component, ViewChild } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { Account } from './account/account.model';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';

// https://stackoverflow.com/questions/39428132/custom-elements-schema-added-to-ngmodule-schemas-still-showing-error
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [AccountsList, AccountForm],
})

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  //styles: ['.blue-bg{background-color:blue;}']
})

/**
* Para executar o código deve-se:
* 1. Acessar o diretório do projeto em
*   E:\instalados\projetos\angular-js\quickstart-master
*
* 2. Iniciar o servidor com o seguinte comando
*   npm start
**/
export class AppComponent  {

  // Convenção ao definir atributos/propriedades privados: iniciar com "_"
  private _accounts:Array<Account> = [
    {
      id: 1,
      title:"Bank Xyz",
      description: "This is my main bank account.",
      balance: 501.2
    },
    new Account(2, "Bank Asd", "My secret account.", 1024.10)
  ];

  private _nextId = 3;

  private createAccError:string = "";
  private accLimit:number = 3;

  private createAcc(newAccount:Account) {
      this.createAccError = "";
      /*this._accounts.push(new Account(this._nextId, titleE1.value, descE1.value,
      balE1.value))
      this._selected.push(false)
      this._nextId++*/

      if (this._accounts.length < this.accLimit) {
        newAccount.id = this._nextId++;
        this._accounts.push(newAccount);
        this.form.resetForm();
      } else {
          this.createAccError = "Only " + this.accLimit + " account(s) allowed.";
      }

      /*titleE1.value = ""
      descE1.value = ""
      balE1.value = 0*/
  }

  private removeAcc(index:number) {
    this._accounts.splice(index, 1)
    //this._selected.splice(index, 1)
  }

  @ViewChild(AccountForm) form:AccountForm;

  /*** Utilizado no início do tutorial para testes ***/
  /*private currentUser:User = { username: "Test", email: "test@test.com" }
  private hideEmail:boolean = true

  private toggle() {
    this.hideEmail = !this.hideEmail;
  }

  private changeMail(newMail:string) {
    this.currentUser.email = newMail;
  }

  private users:Array<User> = [
    { username: "User1", email:"user1@example.com" },
    { username: "User2", email:"user2@example.com" },
    { username: "User3", email:"user3@example.com" },
    { username: "User4", email:"user4@example.com" },
    { username: "User5", email:"user5@example.com" },
    { username: "User6", email:"user6@example.com" }
  ]*/

  /*private keyPress(event:KeyboardEvent) {
    // Representa a ação do botão 'Enter'
    if (event.keyCode == 13) {
      var inputElement = <HTMLInputElement> event.target // Conversão (casting)
        this.changeMail(inputElement.value)
    }
  }*/
} // fim AppComponent

  /*interface User {
    username:string,
    email:string
  }*/
