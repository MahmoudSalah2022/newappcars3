import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private formBuilder: FormBuilder  ,private router: Router ) { }

  profilecarform = this.formBuilder.group({
    Brand:[''],
    Model:[''],
    City:[''],
    Type:['']
  })

  saveForm(){
    console.log('car data is', this.profilecarform.value, this.router.navigate(["/Contact us"]));
  }
  ngOnInit(): void {
  }

}
