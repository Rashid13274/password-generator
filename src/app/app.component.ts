import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';  
  includeLetters  = false;
  includeNumbers  = false;
  includeSymbols  = false;
  length = 0;

  /* 
  password = '';
  consturctor(){
  this.password = ''
  // this very much equivalent.
  // so whenever we instantiate a class, instance object will have password property with empty string.
  }
   */

  // onChangeLength(value: string | null): void {
  //   if (value !== null) {
  //     const parsedValue = parseInt(value, 10);
  //     if (!isNaN(parsedValue)) {
  //       this.length = parsedValue;
  //     }
  //   }
  // }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input?.value;
    this.onChangeLength(value);
  }
  
  onChangeLength(value: string): void {
    const parsedValue = parseInt(value, 10);
  
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  
  

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&*';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars +=numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i =0; i< this.length; i++){
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
    
  }

  // ( helper method ) 
  getPassword(){
    return this.password;
  }

  // (helper method)
  getName(){
    return 'Alex';
  }

}
