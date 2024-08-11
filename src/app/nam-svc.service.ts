import { Injectable } from '@angular/core';

//singleton gets initialized when page loads till closing the browser
@Injectable({
  providedIn: 'root'
})
export class NamSvcService {
  isLoggin = false
  userName = ""

  constructor() { 
    let data=localStorage.getItem("login")
    if(data){
      this.isLoggin = !!data
    } 
    console.log("Step 1",this.isLoggin)
  }
  onInit(){
    
  }
  loginFnc(){
    this.isLoggin = true
    this.userName = "Serena"
    localStorage.setItem("login",this.isLoggin+"")
  }
  logoutFnc(){
    this.isLoggin = false
    this.userName = ""
    localStorage.setItem("login","")
  }
}
