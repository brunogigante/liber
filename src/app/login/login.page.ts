import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;
//constructor( private formBuilder: FormBuilder, private orientacao: ScreenOrientation ) {
  constructor( private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    //this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }
  logForm(){
    console.log(this.loginForm.value)
  }

  ngOnInit() {
    /* this.loginForm.valueChanges.subscribe(
      (banana)=>{console.log(banana)}
    ) */
  }

}
