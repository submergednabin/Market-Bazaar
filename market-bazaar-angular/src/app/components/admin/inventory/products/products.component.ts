import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { mimeValidators } from '../../validators';
import { ProductService } from './product.service';
import { ProductCategory } from 'src/app/model/product-category.model';
import { ProductPhoto } from 'src/app/model/product-photo.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  selectedFile!: File;
  categoryLists: Array<any> = [];
  categories: ProductCategory[] = [];
  mimeError: boolean = false;
  mimeMsg: string = '';
  successMsg: string = '';
  // formGroup !:FormGroup;
  formGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    brandName: new FormControl('',[Validators.required]),
    size: new FormControl('',[Validators.required]),
    amount: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    manufacturedDate: new FormControl('', [Validators.required]),
    expiryDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [
      Validators.required,
      mimeValidators(['jpg', 'jpeg', 'png']),
    ]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService
  ) {
    this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup));
    this.service.getCategory().subscribe({
      next: (data) => {
        this.categoryLists = data;
        console.log(this.categoryLists);
      },
      error: (error) => console.log('Error on cateogry: '),
    });
  }
  onload(c: string[]) {
    // this.selectedFile
  }

  ngOnInit() {}
  triggerMe(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    console.log('selected file', this.selectedFile);
  }

  onRegister(formGroup: FormGroup) {
    const data = formGroup.value;
    const productPhotoDetails = {
      productPhoto: '',
      product: {
        productName: data.productName,
        brandName: data.brandName,
        quantity: data.quantity,
        amount: data.amount,
        description: data.description,
        size: data.size,
        manufacturedDate: data.manufacturedDate,
        expiryDate: data.expiryDate,
        productCategory: {
          id: data.category,
        },
      },
    };
    const formData = new FormData();
    //converting data to string as append method only supports string or blob
    formData.append('product', JSON.stringify(productPhotoDetails));
    formData.append('file', this.selectedFile);
    this.service.saveProducts(formData).subscribe({
      next: (response) => {
        console.log(response.body);
      },
      error: (err) => console.warn(err),
    });
  }
}
