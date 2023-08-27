import { EOF } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  constructor(private categoryService:CategoryService, private snack:MatSnackBar){}

  category = {
    title: '',
    description: ''
  };
  ngOnInit(): void {
  
  }

  formSubmit(){
    if(this.category.title.trim() == '' || this.category.title == null) {
      this.snack.open('Title Required', '', {
        duration: 3000,
      })
    }

    this.categoryService.addCategory(this.category).subscribe((data)=>{
      Swal.fire('Success !!', 'Category added successfully', 'success')
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!', 'Server Error', 'error')
    })
   }
}
