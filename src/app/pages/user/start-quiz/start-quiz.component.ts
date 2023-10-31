import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qId: any;
  questions: any;
  marksGot = 0;
  attempted = 0;
  rightAnswer = 0;
  isSubmit = false;
  timer: any;

  constructor(private router: ActivatedRoute,
    private locationStrategy: LocationStrategy,
    private route: Router,
    private _question: QuestionService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qId = this.router.snapshot.params['qId'];
    console.log(this.qId);
    this.loadQuizQuestion();
  }

  loadQuizQuestion() {
    this._question.getQuizQuestionForTest(this.qId).subscribe(
      (data) => {
        this.questions = data;
        this.timer = this.questions.length * 2 * 60;
        this.startTimer();
        console.log(this.questions);
      },
      (error) => {
        Swal.fire("Error!!", "Error in loading quiz question", "error");
      })
  }

  preventBackButton() {
    history.pushState(null, "", location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, "", location.href);
    })
  }

  submitQuiz() {
    this.rightAnswer = 0;
    this.marksGot = 0;
    this.attempted = 0;
    Swal.fire({
      title: 'Do you want to submit the Quiz!',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
        console.log("After submit Marks Got" + this.marksGot + "Right Answers" + this.rightAnswer);
      }
    })
  }

  startTimer() {
    let t = setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }

  evalQuiz() {
    

    //call eval quiz in server side

    this._question.evalQuiz(this.questions).subscribe(
      (data:any) => {
        console.log(data);        
        this.marksGot = parseFloat(Number(data.body.marksGot).toFixed(2));
        this.rightAnswer = data.body.rightAnswer;
        this.attempted = data.body.attempted;
        this.isSubmit = true;
      },
      (error) => {
        Swal.fire("Error", "Error in evaluating quiz!!", "error");
      })
    // this.questions.forEach((q: any) => {
    //   if (q.answer == q.givenAnswer) {
    //     this.rightAnswer++;
    //     let singleMarks = this.questions[0].quiz.maxMarks / this.questions.length;
    //     console.log("single marks" + singleMarks);
    //     this.marksGot += singleMarks;
    //   }
    //   if (q.givenAnswer.trim() != "") {
    //     this.attempted++;
    //   }
    // })
  }

  formatTimer() {
    var mm = Math.floor(this.timer / 60);
    var ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  printPage() {
    window.print();
  }
}
