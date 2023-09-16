import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import baseUrl from 'src/app/services/helper';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-quiz-question',
  templateUrl: './update-quiz-question.component.html',
  styleUrls: ['./update-quiz-question.component.css']
})
export class UpdateQuizQuestionComponent implements OnInit {

  public Editor = ClassicEditor;
  quesId: any;
  qTitle: any;
  question: any = {
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private questionService: QuestionService,
    private router:Router) { }

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params['quesid'];
    this.qTitle = this.route.snapshot.params['qtitle'];
    this.http.get(`${baseUrl}/question/` + this.quesId).subscribe((data) => {
      this.question = data;
    })
  }

  public updateQuizQuestion() {
    this.questionService.updateQuizQuestion(this.question).subscribe((data) => {
      console.log(data);
      Swal.fire('Success!!', 'Quiz question updated Successfully', 'success');           
      this.router.navigate(['/admin-dashboard/quiz/question/' + this.question.quiz.qid + '/' + this.qTitle]);
    },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in updating quiz question', 'error');
      }
    );
  }

}
