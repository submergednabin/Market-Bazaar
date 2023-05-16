import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catFormGroup = new FormGroup({
    categoryName: new FormControl('',[Validators.required]),
  })

  constructor(private formBuilder:FormBuilder, private service:CategoryService){
    this.catFormGroup.valueChanges.subscribe((val) => console.log(this.catFormGroup));
  }

  saveCategory(catFormGroup:FormGroup){
    const data = catFormGroup.value;
    this.service.saveCategory(catFormGroup.value).subscribe({
      next:(response)=>{
        console.log("response cat ", response)
      },
      error:(err)=>{
        console.log(err.body)
      }
    });
  }


}
