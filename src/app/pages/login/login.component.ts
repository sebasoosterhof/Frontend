import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExamApplicationService } from '../../services/exam-application.service';

import { User } from '../../interfaces/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ExamApplicationService]
})
export class LoginComponent implements OnInit {
  users: User[];
  user = new Array<User[]>();
  errMsg: string;

  constructor(private examApplicationService: ExamApplicationService) { }

  /*
  * @function: public ngOnInit()
  * @description: this is the first function that will be executed. It calls functions that has to be executed on pageload.
  * @params: none
  * @returns: none
  * @date: 10-06-2017
  */
  public ngOnInit() {
    this.examApplicationService.getUsers().subscribe(result => {
      this.users = result;
    },
      err => console.error(err),
      () => console.log(this.users));
  }

  public login() {
    console.log(this.user);
    if (!this.examApplicationService.login(this.user)) {
      this.errMsg = 'Inloggen is niet gelukt';
    }
  }
}
