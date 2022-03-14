import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  type: any;
  processCheck: boolean;

  constructor(private router: Router) { }

  fircheck: boolean;
  opnValue :any;
  ngOnInit() {
    let temp = localStorage.getItem("firCheck");
    if (temp == '1') {
      this.fircheck = true
    }
    else {
      this.fircheck = false
    }
    this.fircheck;
    this.opnValue = localStorage.getItem('opnValue');
    this.type = localStorage.getItem('type');

    if(this.opnValue>210)
    {
      this.processCheck = true;
    }
  }


  Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }

  drawing() {
    localStorage.removeItem('DrgCode');

    this.router.navigate(['/drawing']);
  }
}
