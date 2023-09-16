import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{

  
 
  quizzes : any = [];
    
    constructor(private quiz:QuizService){}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    this.quiz.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes = data;
        console.log(this.quizzes)
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error', 'Error in loading quiz', 'error');
      })
  }

  deleteQuiz(qId:any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you Sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result)=>{
        if(result.isConfirmed) {
          this.quiz.deleteQuiz(qId).subscribe(
            (data:any)=>{   
              this.quizzes = this.quizzes.filter((quiz:any) => quiz.qid != qId);
              Swal.fire('Success', data['message'], 'success');
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error', 'Error in deleting quiz', error);
          })
        }
    })
  }
}
