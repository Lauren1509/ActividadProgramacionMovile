import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IUser {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title!: FormControl;
  public description!: FormControl;

  public userForm!: FormGroup;

  users: IUser[] = [];

  constructor() {
    this.initForm();
  }

  public doRegister() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  private initForm() {
    this.title = new FormControl("", [Validators.required, Validators.minLength(3)]);
    this.description = new FormControl("", [Validators.required, Validators.minLength(10)]);

    this.userForm = new FormGroup({
      title: this.title,
      description: this.description
    });
  }
}


