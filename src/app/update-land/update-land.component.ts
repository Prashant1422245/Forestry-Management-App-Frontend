import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Land } from '../land';
import { LandService } from '../land.service';
@Component({
  selector: 'app-update-land',
  templateUrl: './update-land.component.html',
  styleUrls: ['./update-land.component.css']
})
export class UpdateLandComponent implements OnInit {

  surveyNumber: String = "";
   land: Land = new Land();
  constructor(private landService: LandService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.surveyNumber = this.route.snapshot.params['surveyNumber'];
    this.landService.getLandBySurveyNumber(this.surveyNumber).subscribe(data => {
      this.land = data; console.log(data);
    },
      error => console.log(error));
  }
  onSubmit() {
    this.landService.UpdateLand(this.land).subscribe(data => {
      this.navigateToLand();
    }, error => console.log(error));
    //alert("Sucessfully updated the Land Detail");
  }
  navigateToLand() {
    this.router.navigate(['/list-of-lands']);
  }


}
