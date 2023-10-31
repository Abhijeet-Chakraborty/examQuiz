import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qId: any;
  quiz:any;
  constructor(private router: ActivatedRoute, private quizService: QuizService, private route: Router) { }

  ngOnInit(): void {
    this.qId = this.router.snapshot.params['qId'];    
    this.quizService.getQuiz(this.qId).subscribe(
      (data) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        Swal.fire("Error!!", "Error in getting quiz", "error");
      }
    )    
  }

  startQuiz() {
    Swal.fire({
      title: 'Do you want to Start the Quiz!',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon: 'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.route.navigate(['/start-quiz/' + this.qId]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
