import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _httpClient:HttpClient) { }

  public getQuizQuestion(qId:any) {
    return this._httpClient.get(`${baseUrl}/question/quiz/all/${qId}`);
  }

}