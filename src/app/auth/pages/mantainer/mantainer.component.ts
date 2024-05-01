import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-mantainer',
  templateUrl: './mantainer.component.html',
  styleUrls: ['./mantainer.component.css'], // El nombre de la propiedad es styleUrls, no styleUrl
})
export class MantainerComponent {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      items: this.fb.array([]),
      title: ['', [], []],
      views: this.fb.array([])

    });
  }

  get itemsTech(): FormArray {
    return this.myForm.get('items') as FormArray;
  }

  addItemTech(): void {
    this.itemsTech.push(this.fb.control(''));
  }

  removeItemTech(index: number): void {
    this.itemsTech.removeAt(index);
  }

  removeItemView(index: number): void {
    this.itemsTech.removeAt(index);
  }

  ///
  get itemsView(): FormArray {
    return this.myForm.get('views') as FormArray;
  }

  addItemView(): void {
    this.itemsView.push(this.createItemView());
  }

  createItemView(): FormGroup {
    return this.fb.group({
      nombre: '',
      edad: ''
    });
  }

  sendForm(): void {
    const valuesToSend = this.myForm.value;
    // Aquí puedes enviar los valores a través de una solicitud HTTP o realizar cualquier otra acción que necesites
    console.log(valuesToSend);
  }
}
