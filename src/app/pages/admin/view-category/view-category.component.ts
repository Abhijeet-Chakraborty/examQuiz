import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories: any= [];
  constructor(private categoryService : CategoryService){}
ngOnInit(): void {
  this.categoryService.categories().subscribe((data:any)=>{
    this.categories = data;
    console.log(this.categories);
  },
  (error)=>{
    Swal.fire('Get Category', 'Error in getting Categories', 'error');
  })
}
}
