import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }


  itemImageUrl = '../assets/1.jfif';
  itemImageUrl2 = '../assets/2.JFIF';
  itemImageUrl3 = '../assets/1.jpg';
  ngOnInit(): void {
  }

}
