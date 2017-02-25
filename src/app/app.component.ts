import { Component, OnInit } from '@angular/core';
import { TestService } from './testService';
@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private testService: TestService){}
  ngOnInit(){
    this.testService.getString();
  }

  title = 'pf works!';
}
