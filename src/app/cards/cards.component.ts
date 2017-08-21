import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type;
  key;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe((params) => {
      this.type = params['type'];
      if (params['key']) {
        this.key = params['key'];
      }
    });

    // this.key = this.route.snapshot.queryParams['key'];
    this.route.queryParams.subscribe((params) => {
      if (params['key']) {
        this.key = params['key'];
      }
    });
  }
}
