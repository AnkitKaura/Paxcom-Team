import {  Component, OnInit } from '@angular/core';
import  { teamlist } from '../../team';
declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamArr:any;
  constructor() { }

  ngOnInit(): void {
    this.teamArr = teamlist;
      (<any>$('.js-scroll-trigger')).on('click',(function(){
        (<any>$(".navbar-collapse")).collapse("hide");
      }))
  }
  
}
