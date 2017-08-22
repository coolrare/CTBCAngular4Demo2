import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { initDashboard } from './init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    $(initDashboard);
  }

  goCards1(type) {
    this.router.navigate(['/cards', type]);
  }
  goCards2(type) {
    this.router.navigateByUrl('/cards/' + type);
  }
  goCards4(type, keyid) {
    this.router.navigate(['/cards', type], {
      queryParams: {
        key: keyid
      }
    });
  }
}
