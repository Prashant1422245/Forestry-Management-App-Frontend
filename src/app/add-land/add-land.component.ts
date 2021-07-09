import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Land } from '../land';
import { LandService } from '../land.service';
@Component({
  selector: 'app-add-land',
  templateUrl: './add-land.component.html',
  styleUrls: ['./add-land.component.css']
})
export class AddLandComponent implements OnInit {

  land: Land = new Land();
  addForm!: NgForm;
  constructor(private landService: LandService, private router: Router)       
  { }

  ngOnInit(): void {
    this.land;
  }
  onSubmit() {
    console.log('inside onsubmit method..')
    this.saveLand(this.addForm);
  }

  saveLand(addForm: NgForm) {
    this.landService.createLand(this.land).subscribe(data => { console.log(data);
     
      this.navigateToLand(); },
     (error: HttpErrorResponse) => { console.log(error); alert(error.message);addForm.reset();})

  }

  navigateToLand() {
    this.router.navigate(['/list-of-lands']);
  }


}
