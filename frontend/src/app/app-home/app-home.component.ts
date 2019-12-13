import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  addPonto = false;
  listPonto = false;
  editPonto = false;
  id: number;

  constructor() { }

  ngOnInit() {
    this.listPonto = true;
  }

  goAddPonto(){
    this.addPonto = true; 
    this.listPonto = false;
    this.editPonto = false;

  }

  goListPonto(){
    this.addPonto = false; 
    this.listPonto = true;
    this.editPonto = false;
  }

  goEditPonto(id: number){
    this.id = id;
    this.addPonto = false; 
    this.listPonto = false;
    this.editPonto = true;
  }

}
