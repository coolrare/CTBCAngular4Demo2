import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  data: any = {
    title: 'Will',
    group1: {
      subtitle: 'Huang'
    }
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'title': [''],
      'group1': this.fb.group({
        'subtitle': ['Hello', [Validators.required]]
      })
    });
  }

  ngOnInit() {
  }

  doReset() {
    this.form.reset(this.data);
  }

}
