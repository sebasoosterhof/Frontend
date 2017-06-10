import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { User } from '../interfaces/User';
import { ExamLine } from '../interfaces/exam-line';
import { Remark } from '../interfaces/remark';
import { Exam } from '../interfaces/exam';



@Injectable()
export class ExamApplicationService {
  private getUsersURL = 'http://127.0.0.1:8000/api/users/';
  private getExamLinesURL = 'http://127.0.0.1:8000/api/examlines/';
  private setExamLinesURL = 'http://127.0.0.1:8000/api/examlines/update/examline';
  private deleteExamLinesURL = 'http://127.0.0.1:8000/api/examlines/delete/examline';
  private addCandidateURL = 'http://127.0.0.1:8000/api/examcandidates/store/candidate';
  private getRemarksURL = 'http://127.0.0.1:8000/api/remarks/';
  private getExamsURL = 'http://127.0.0.1:8000/api/exams/';



  constructor(private http: Http,
    private router: Router) { }

  /*
  * @function: public getExamLines()
  * @description: gets examLines from the getExamLinesURL link which gets its data from the API.
  * @params: none
  * @returns: http get API route.
  * @date: 22-05-2017
  */
  public getUsers(): Observable<User[]> {
    return this.http.get(this.getUsersURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public getExamLines()
  * @description: gets examLines from the getExamLinesURL link which gets its data from the API.
  * @params: none
  * @returns: http get API route.
  * @date: 22-05-2017
  */
  public getExamLines(): Observable<ExamLine[]> {
    return this.http.get(this.getExamLinesURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public getRemarks()
  * @description: gets remarks from the getRemarksURL link which gets its data from the API.
  * @params: none
  * @returns: http get API route.
  * @date: 31-05-2017
  */
  public getRemarks(): Observable<Remark[]> {
    return this.http.get(this.getRemarksURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public setExamLines()
  * @description: gets updated examLines from edit-candidate-dialog and sets them to the API.
  * @params: examLine
  * @returns: http post to API.
  * @date: 06-06-2017
  */
  public setExamLines(examLine): Observable<ExamLine[]> {
    const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.setExamLinesURL, examLine, headers)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public deleteExamLines()
  * @description: sets examLine to delete in ExamApplicationService.
  * @params: examLineId
  * @returns: http delete to API.
  * @date: 08-06-2017
  */
  public deleteExamLines(examLineId): Observable<ExamLine[]> {
    const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.deleteExamLinesURL + '?id=' + examLineId, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public addExamCandidate()
  * @description: gets updated examLines from edit-candidate-dialog and sets them to the API.
  * @params: examCandidate
  * @returns: http put to API.
  * @date: 07-06-2017
  */
  public addExamCandidate(examCandidate): Observable<ExamLine[]> {
    const candidate = Object.assign({}, examCandidate);
    const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.addCandidateURL, candidate, headers)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public getExams()
  * @description: gets exams from the getExamsURL link which gets its data from the API.
  * @params: examCandidate
  * @returns: http put to API.
  * @date: 07-06-2017
  */
  public getExams(): Observable<Exam[]> {
    return this.http.get(this.getExamsURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /*
  * @function: public logout()
  * @description: logs the user out.
  * @params: none
  * @returns: none
  * @date: 10-06-2017
  */
  public logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  /*
  * @function: public getExams()
  * @description: logs the user in
  * @params: user
  * @returns: logged in status.
  * @date: 10-06-2017
  */
  public login(user) {
    let users: User[];
    this.getUsers().subscribe(result => {
      users = result;
    });

    setTimeout(() => {
      console.log(users);
      const authenticatedUser = users.find(u => u.email === user.email);
      if (authenticatedUser && authenticatedUser.password === user.password) {
        localStorage.setItem('user', JSON.stringify(authenticatedUser));
        this.router.navigate(['overzicht']);
        console.log('true');
        return true;
      }
      console.log('false');
      return false;
    }, 500);

  }

  public checkLoginCredentials() {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['login']);
    }
  }
}
