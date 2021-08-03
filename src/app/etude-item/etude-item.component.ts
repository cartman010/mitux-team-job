import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-etude-item',
  templateUrl: './etude-item.component.html',
  styleUrls: ['./etude-item.component.sass']
})
export class EtudeItemComponent implements OnInit {

  @Input()
  title 
  @Input()
  display
  @Input()
  validDates

  niveaux = ['Secondaire/Bac', 'Licence (B+3)', 'Master (B+5)', 'Doctorat (B+8/11)']
  years = []

  niveauControl: FormControl
  anneeDebutControl: FormControl
  anneeFinControl: FormControl

  childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [anneeDebutControl, ...anneeFinControl] = Object.keys(formGroup.controls || {});
    const isValid = anneeFinControl.every(controlName => formGroup.get(controlName).value === formGroup.get(anneeDebutControl).value);
    return isValid ? null : { childrenNotEqual: true };
  }

  constructor() { }

  ngOnInit(): void {
    this.niveauControl = new FormControl(this.title);
    this.anneeDebutControl = new FormControl(new Date().getFullYear().toString(), this.childrenEqual);
    this.anneeFinControl = new FormControl(new Date().getFullYear().toString());
    this.display = true
    this.validDates = true
    this.setYears()
  }

  onClickRemove() {
    this.display = false
  }

  setTitle() {
    this.title = this.niveauControl.value
    console.log("this.anneeDebutControl.value >= this.anneeFinControl.value" +
      this.anneeDebutControl.value + " ****** " + this.anneeFinControl.value)
    if (Number.parseInt(this.anneeDebutControl.value) >= Number.parseInt(this.anneeFinControl.value))
      this.validDates = false
    else
      this.validDates = true
  }

  setYears() {
    for (var i = 1980; i <= new Date().getFullYear(); i++)
      this.years.push(i)
  }
}
