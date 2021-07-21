import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.sass']
})
export class EtudesComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
