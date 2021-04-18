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
  currentTeamMember: any;
  constructor() { }

  ngOnInit(): void {
    this.teamArr = teamlist;
    this.currentTeamMember = {};
      (<any>$('.js-scroll-trigger')).on('click',(function(){
        (<any>$(".navbar-collapse")).collapse("hide");
      }))
  }

  openOverlay(teamMember:any): void{
      this.currentTeamMember = teamMember;  
  }
}
