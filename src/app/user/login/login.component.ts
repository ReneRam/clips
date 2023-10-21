import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import IUser from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password :''
  }
  showAlert = false
  alertMsg = 'Please wait! You are being logged in..'
  alertColor = 'blue'
  inSubmission = false

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! You are being logged in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (er) {
      this.alertMsg = 'An unexpected error occured. Please try again later'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    
    this.alertMsg = 'Welcome Back! '// + this.auth.name
    this.alertColor = 'green'  
  }


}
