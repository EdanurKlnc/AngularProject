import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      firstname: new FormControl(),
      password: new FormControl()

    });

  }

  //Kullanıcı giriş bilgilerini kayıttaki bilgiler ile karşılaştırıp,kullanıcı girişi sağlama
  onSubmit(login:FormGroup) {
    // console.log(this.login.value);
    this.http.get<any>("http://localhost:3000/signup")
      .subscribe(res=> {
        const signup = res.find((a:any) => {
          return a.firstname === this.login.value.firstname && a.password === this.login.value.password
        });
        
        if (signup) {
          alert('Giriş başarılı');
          this.login.reset();
          this.route.navigate(['product']);

        } else {
          alert('Kullanıcı adı veya şifre hatalı !');
          this.route.navigate(['login']);
        }
      }, err => {
        alert('Bir şeyler ters gitti');

      })

  }

}
