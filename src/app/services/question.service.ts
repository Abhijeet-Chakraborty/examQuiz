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

  public getQuizQuestionForTest(qId:any) {
    return this._httpClient.get(`${baseUrl}/question/quiz/${qId}`);
  }

  public addQuizQuestion(question:any) { 
    return this._httpClient.post(`${baseUrl}/question/`, question);
  }

  public updateQuizQuestion(question:any) { 
    return this._httpClient.put(`${baseUrl}/question/`, question);
  }

  public deleteQuizQuestion(quesId:any) {
    return this._httpClient.delete(`${baseUrl}/question/${quesId}`);
  }

  public evalQuiz(questions:any) {
    return this._httpClient.post(`${baseUrl}/question/eval-quiz`, questions);
  }
}
