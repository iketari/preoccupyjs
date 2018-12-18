import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formResult: string = '';

  onFormSubmit(event) {
    event.preventDefault();
    const formData: any = new FormData(event.target);
    this.formResult = Array.from(formData.entries())
      .reduce<string>((acc, pair) => acc += `name: ${pair[0]} value: ${pair[1]}\n`, '');

      console.log(this.formResult, formData.entries())
  }

}
