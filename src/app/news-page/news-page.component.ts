import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamSvcService } from '../nam-svc.service';

@Component({
  selector: 'news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  @Input('title') titleVar=""
  @Input('detail') detailVar=""
  @Input('commVar') commentArr:string[]=[]
  @Output() SelectMe = new EventEmitter();

  SelectMeFnc(){
    this.SelectMe.emit(this.titleVar)
  }
  constructor(public namService:NamSvcService){
    
  }

}
