import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  signuser: any;

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),

    });

  }

  //Json ile kullanıcı kayıt işlemi
  signup() {
    this.signuser = this.signupForm.value.fname;
    // console.log(this.signupForm.value);
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value)
      .subscribe(res => {
        alert('Kayıt olundu');
       // this.toast.success(this.signuser, 'Kayıt olundu');
        this.signupForm.reset();
        this.route.navigate(['login']);

      }, err => {
        alert('Bir şeyler ters gitti!');

      }
      )
  }

}
