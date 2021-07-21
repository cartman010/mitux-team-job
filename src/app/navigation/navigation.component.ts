import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  imageInfosSrc = "../assets/img/infos.png";
  imageEtudesSrc = "../assets/img/etudes.png";
  imageProSrc = "../assets/img/professionnel.png";

  constructor() { }

  ngOnInit(): void {
  }

  onInfosClick() {
    this.imageInfosSrc = "../assets/img/infos-clicked.png";
    this.imageEtudesSrc = "../assets/img/etudes.png";
    this.imageProSrc = "../assets/img/professionnel.png";
  }

  onEtudesClick() {
    this.imageInfosSrc = "../assets/img/infos.png";
    this.imageEtudesSrc = "../assets/img/etudes-clicked.png";
    this.imageProSrc = "../assets/img/professionnel.png";
  }

  onProClick() {
    this.imageInfosSrc = "../assets/img/infos.png";
    this.imageEtudesSrc = "../assets/img/etudes.png";
    this.imageProSrc = "../assets/img/professionnel-clicked.png";
  }

}
