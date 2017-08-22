import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'title': ['A123456789', [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      'subtitle': ['Hello', [
        Validators.required
      ]
    ]
    });
  }

  ngOnInit() {
  }

}
