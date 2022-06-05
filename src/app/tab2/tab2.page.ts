import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  addForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      opinion: ['', Validators.required],
    });
  }
  aForm(){
    console.log(this.addForm.value)
  }

  ngOnInit() {
    /* this.loginForm.valueChanges.subscribe(
      (banana)=>{console.log(banana)}
    ) */
  }

}
