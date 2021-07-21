import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.sass']
})
export class InfoPersoComponent implements OnInit {
  
  daysInMonth1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  daysInMonth2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  years = []
  days = []

  dayControl = new FormControl(new Date().getDate().toString());
  monthControl = new FormControl(new Date().getMonth().toString());
  yearControl = new FormControl(new Date().getFullYear().toString());

  constructor() { }

  ngOnInit(): void {
    this.setYears()
  }
   // make sure the number of days correspond with the selected month
  setDays() {
    //var optionCount = $('#select-day option').length, daysCount;
    var daysInMonth;
    this.days = [];
    
    if (this.yearControl.value % 4 == 0)
      daysInMonth = this.daysInMonth2;
    else
      daysInMonth = this.daysInMonth1;
    for (var i = 1; i <= daysInMonth[this.monthControl.value]; i++)
      this.days.push(i) 

  }

  setYears() {
    this.setDays()
    for (var i = 1980; i <= new Date().getFullYear(); i++)
      this.years.push(i)
  }

}
