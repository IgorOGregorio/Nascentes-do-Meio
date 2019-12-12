import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
/*import { BooksApiService } from '../api/books-api.service';*/

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private home: AppHomeComponent) { }

  ngOnInit() {
  }

  showAddPonto(){
    this.home.goAddPonto();
  }

  showListPonto(){
    this.home.goListPonto();
  }

}
