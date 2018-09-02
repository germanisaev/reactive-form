import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  isFrom; 
  profileForm = this.formBuilder.group({
    student: ['', Validators.required],
    class: ['']
  });

  classes = ['A','B','C','D'];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);

    this.isFrom = this.profileForm.value;
  }

}
