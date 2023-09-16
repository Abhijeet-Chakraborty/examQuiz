import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor;

  qId:any = '';
  qTitle:any = '';
  question = {
    quiz:{
      qid:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }

  constructor(private _route: ActivatedRoute, private questionService: QuestionService) {

  }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz.qid = this.qId;    
  }

  public addQuizQuestion() {
    this.questionService.addQuizQuestion(this.question).subscribe((data)=> {
      console.log(data); 
      Swal.fire('Success!!', 'Quiz question added Successfully', 'success');
    },
    (error)=> {
      console.log(error);
      Swal.fire('Error!!', 'Error in adding quiz question', 'error');
    }
    );
  }

}
