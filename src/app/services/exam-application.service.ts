import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { Student } from '../interfaces/student';


@Injectable()
export class ExamApplicationService {

  public students: Student;

  private studentURL = 'http://127.0.0.1:8000/api/students';

  constructor(private http: Http) { }

/*
* @function: public getStudents()
* @description: gets students from the API
* @params: none
* @returns: http get API route
* @date: 22-05-2017
*/
  public getStudents(): Observable<Student[]> {
    return this.http.get(this.studentURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
