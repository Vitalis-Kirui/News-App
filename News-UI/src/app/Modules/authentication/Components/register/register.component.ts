import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // Successful registration
  registrationSuccess: boolean = false;

  // Already registered
  registered: boolean = false;

  registrationForm! : FormGroup;

  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  constructor(private service : FormBuilder, private router : Router , private registerService : AuthenticationService) { }

  // GETTER FUNCTIONS
  // First name
  get firstname() {
    return this.registrationForm.get('firstname');
  };

    // Last name
    get lastname() {
      return this.registrationForm.get('lastname');
    };

      // Username
  get username() {
    return this.registrationForm.get('username');
  };

    // Phone number
    get phonenumber() {
      return this.registrationForm.get('phonenumber');
    };

      // Email
  get email() {
    return this.registrationForm.get('email');
  };

    // Password
    get password() {
      return this.registrationForm.get('password');
    };

      // Confirm password
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword');
  };

    // Subscribe
    get subscribe() {
      return this.registrationForm.get('subscribe');
    };

  ngOnInit() {

    this.registrationForm = this.service.group({
      firstname : ['',[ Validators.required, Validators.minLength(3), forbiddenValidator(/admin/), forbiddenValidator(/porn/), forbiddenValidator(/nameless/)]],
      lastname : ['',[ Validators.required, Validators.minLength(3), forbiddenValidator(/admin/), forbiddenValidator(/porn/), forbiddenValidator(/nameless/) ]],
      username : ['',[ Validators.required, Validators.minLength(3), forbiddenValidator(/admin/), forbiddenValidator(/porn/), forbiddenValidator(/nameless/)]],
      phonenumber : ['',[ Validators.required, Validators.minLength(10)]],
      email: ['',[Validators.pattern(this.emailRegEx)]],
      password : ['',[ Validators.required, Validators.minLength(6)]],
      confirmpassword : ['',Validators.required],
      subscribe : [''],
    },
    {validator : passwordMatchValidator}
    )

    // Email conditional validation
   //subscribing to checkbox
   this.registrationForm.get('subscribe')?.valueChanges
     .subscribe((checkedvalue) =>{

      // getting email field
      const email = this.email;

      if(checkedvalue){
        email?.setValidators([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      }
      else{
        email?.clearValidators()
        email?.setValidators([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      }
      email?.updateValueAndValidity();
     }) 

  }

  // Submit form function
  // submitForm(){    
  //   // sending register data to database
  //   this.registerService.register(this.registrationForm.value)
  //       .subscribe(
  //         results =>{
  //           this.registrationSuccess=true;
  //           console.log(results);
  //         },
  //         error =>{
  //           console.log(error);
  //           if(error instanceof HttpErrorResponse){
  //             if(error.status === 201){
  //               this.registered = true;                
  //              console.log("Username already exists!");
  //             }
  //             ;
  //           }
  //         }
  //       );

  // }

  // Login function from button
  login(){

    this.router.navigate(['/authentication/login']);
    
  }

}

