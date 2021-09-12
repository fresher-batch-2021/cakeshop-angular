import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
    localStorage.clear()
    this.route.navigate(['/login']);
  }

}
