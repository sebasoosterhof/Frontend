import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Interfaces
import { ExamLine } from '../interfaces/exam-line';
import { Remark } from '../interfaces/remark';



@Injectable()
export class ExamApplicationService {
  private getExamLinesURL = 'http://127.0.0.1:8000/api/examlines/';
  private setExamLinesURL = 'http://127.0.0.1:8000/api/examlines/update/examline';
  private deleteExamLinesURL = 'http://127.0.0.1:8000/api/examlines/delete/examline';
  private addCandidateURL = 'http://127.0.0.1:8000/api/examcandidates/store/candidate';
  private getRemarksURL = 'http://127.0.0.1:8000/api/remarks/';



  constructor(private http: Http) { }


  /*
  * @function: public getExamLines()
  * @description: gets examLines from the examLinesURL link which gets its data from the API.
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
  * @description: gets remarks from the examLinesURL link which gets its data from the API.
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
  * @date: 07-06-2017
  */
  public deleteExamLines(examLineId): Observable<ExamLine[]> {
    console.log(examLineId);
    const key = 'id';
    const val = examLineId;
    const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(this.deleteExamLinesURL + '?' + key + '=' + val, options)
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
}
