import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Change-color]',
  standalone: true
})
export class NamDtvDirective {
  NamElement!: HTMLElement

  constructor(private psgElement:ElementRef) {
    this.NamElement = psgElement.nativeElement
   }

   ngOnInit(){
    this.NamElement.innerHTML = "This is from Directive"
    this.NamElement.style.color = "blue"
    this.NamElement.style.background = "pink"
   }

}
