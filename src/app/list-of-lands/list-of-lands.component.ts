import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Land } from '../land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-list-of-lands',
  templateUrl: './list-of-lands.component.html',
  styleUrls: ['./list-of-lands.component.css']
})
export class ListOfLandsComponent implements OnInit {
    
  lands: Land[]=[];
  constructor(private landService: LandService, private router: Router) { }

  ngOnInit(): void {
    this.getLands()

  }
  private getLands(){
    this.landService.getListOfLands().subscribe(data => { this.lands = data, console.log(data) });
  }
  updateLand(surveyNumber: String) {
    this.router.navigate(['/update-land', surveyNumber]);
  }
  deleteLand(surveyNumber: String) {
    this.landService.deleteLand(surveyNumber).subscribe(data => {
      console.log(data),
      //alert("Do you want to delete this land?");
      this.getLands();
    }, error => console.log(console.error))
  }

}
