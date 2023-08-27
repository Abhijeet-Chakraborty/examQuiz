import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit{

  qId:any;
  qTitle:any;
  questions:any = [];


constructor(private _activeRoute:ActivatedRoute, private quizQuestion: QuestionService){}

  ngOnInit(): void {
    this.qId = this._activeRoute.snapshot.params['qid'];
    this.qTitle = this._activeRoute.snapshot.params['title'];
    console.log(this.qId + "" + this.qTitle);
    this.quizQuestion.getQuizQuestion(this.qId).subscribe((data)=>{
      this.questions = data;
      console.log(this.questions);
    },
    (error)=>{
      Swal.fire('Error!', 'Error in getting questions', 'error');
    })   
  }
}
