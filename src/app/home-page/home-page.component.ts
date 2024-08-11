import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NamSvcService } from '../nam-svc.service';
import { NamDtvDirective } from '../nam-dtv.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent, FormsModule, NamDtvDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  commentVar=""
  commentArr:any={}
  selectedNews=""

  
  // eduCommentAryVar:string[]=[]
  // sportsCommentAryVar:string[]=[]


  constructor(public NavVap: Router,
    public UrlVap: ActivatedRoute,public namService:NamSvcService) { }

 
  GotoPageFnc()
  {
    this.NavVap.navigate(["user/Serena/mobile/87654345"], 
      {
        replaceUrl:true,
        state: {OTPVak: 1234}
      });
  }

  addComment(commentVav:NgModel){

    if(this.commentArr[this.selectedNews])
        this.commentArr[this.selectedNews].push(this.commentVar)
    else
      this.commentArr[this.selectedNews]=[this.commentVar]
      commentVav.reset();
  }
  SelectMeFnc(EvtRsgVar:string){
    this.selectedNews=EvtRsgVar
  }

  



}
