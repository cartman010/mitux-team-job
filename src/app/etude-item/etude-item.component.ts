import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  niveaux = ['Secondaire/Bac', 'Licence (B+3)', 'Master (B+5)', 'Doctorat (B+8/11)']
  niveauControl: FormControl

  constructor() { }

  ngOnInit(): void {
    this.niveauControl = new FormControl(this.title);
    this.display = true
  }

  onClickRemove() {
    this.display = false
  }

  setTitle() {
    this.title = this.niveauControl.value
  }

}
