import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
model:any={};
constructor(private router:Router) {
}

  ngOnInit(): void {
  
  }







}
