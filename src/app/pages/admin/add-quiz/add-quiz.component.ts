import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories: any = [];

  quizData: any = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: ''
    }
  }

  constructor(private category: CategoryService, private snack: MatSnackBar, private quiz: QuizService) { }
  ngOnInit(): void {
    this.category.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading categories', error);
      }
    )


  }
  //Add Quiz
  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this.snack.open('Title Required', '', {
        duration: 3000
      })
      return;
    }

    this.quiz.addQuiz(this.quizData).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success !!', 'Quiz added successfully', 'success')
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: ''
          }
        }
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in Adding Quiz', error);
      }
    )
  }
}
