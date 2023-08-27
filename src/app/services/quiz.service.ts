import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public httpClient: HttpClient) { }

  public getQuizzes() {
    return this.httpClient.get(`${baseUrl}/quiz/`)
  }

  public addQuiz(quiz: any) {
    return this.httpClient.post(`${baseUrl}/quiz/`, quiz);
  }

  public deleteQuiz(qId: any) {
    return this.httpClient.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId: any) {
    return this.httpClient.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quiz: any) {
    return this.httpClient.put(`${baseUrl}/quiz/`, quiz);
  }
}
