import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NamFomVar = {
    Name: "",
    Product: "",
    Cost: 0
  };

  prodArryVar!: any;
  EdtIdxVar = -1;
  editingProdId!: number; // Track the product ID being edited

  constructor(public HttpConnection: HttpClient) {
    this.getProdFnc(); // Fetch products on initialization
  }

  getProdFnc() {
    this.HttpConnection.get<any[]>("http://localhost:3000/prod")
      .subscribe(
        ResRsgVar => {
          console.log(ResRsgVar);
          this.prodArryVar = ResRsgVar;
        },
        
      );
  }

  AddProdFnc(NamFomVav: NgForm) {
    if (!this.NamFomVar.Name || !this.NamFomVar.Product || this.NamFomVar.Cost <= 0) {
      console.error("Invalid form data.");
      return;
    }

    this.HttpConnection.post("http://localhost:3000/prod", this.NamFomVar)
      .subscribe(
        (ResRsgVar: any) => {
          console.log('Response from server:', ResRsgVar);
          this.getProdFnc(); // Refresh the product list
          this.resetForm(); // Reset the form after adding
        },
        
      );
  }

  editRow(index: number) {
    const selectedRow = this.prodArryVar[index];
    this.NamFomVar.Name = selectedRow.Name;
    this.NamFomVar.Product = selectedRow.Product;
    this.NamFomVar.Cost = selectedRow.Cost;
    this.editingProdId = selectedRow.UidCol; // Store the ID of the product being edited
    this.EdtIdxVar = index;
  }

  updateProdFnc() {
    

    this.HttpConnection.put(`http://localhost:3000/prod/${this.editingProdId}`, this.NamFomVar)
      .subscribe(
        (ResRsgVar: any) => {
          console.log('Updated:', ResRsgVar);
          this.getProdFnc();
          this.resetForm(); 
          this.EdtIdxVar = -1;
        },
      );
  }

  deleteRow(index: number, UidCol: number) {
    if (confirm("Do you really want to delete?")) {
      this.HttpConnection.delete(`http://localhost:3000/prod/${UidCol}`)
        .subscribe(
          (ResRsgVar: any) => {
            console.log('Deleted:', ResRsgVar);
            this.getProdFnc(); // Refresh the list after deletion
          },
          
        );
    }
  }

  resetForm() {
    this.NamFomVar = {
      Name: "",
      Product: "",
      Cost: 0
    };
  }

  /*
  verifyTable = [
    { NamVak: "Sriya", prod: "Tesla Ev Car", cost: 5000000 },
    { NamVak: "Navya", prod: "Tesla Ev Car", cost: 10000000 },
    { NamVak: "Serena", prod: "iPhone 20", cost: 400000 },
    { NamVak: "Jayanth", prod: "HP Envy 390", cost: 40000 }
  ];
 
  EdtIdxVar = -1;
 
  editRow(index: number) {
    const selectedRow = this.verifyTable[index];
    this.NamFomVar.NamIptVak = selectedRow.NamVak;
    this.NamFomVar.prod = selectedRow.prod;
    this.NamFomVar.cost = selectedRow.cost;
    this.EdtIdxVar = index;
  }
 
  deleteRow(index: number) {
    if (confirm("Do you really want to delete?")) {
      this.verifyTable.splice(index, 1);
    }
  }
 
  UptBtnFnc() {
    if (this.EdtIdxVar >= 0) {
      this.verifyTable[this.EdtIdxVar] = {
        NamVak: this.NamFomVar.NamIptVak,
        prod: this.NamFomVar.prod,
        cost: this.NamFomVar.cost
      };
      this.EdtIdxVar = -1;
      this.resetForm();
    }
  }
 
  addRow() {
    if (this.NamFomVar.NamIptVak && this.NamFomVar.prod && this.NamFomVar.cost > 0) {
      this.verifyTable.push({
        NamVak: this.NamFomVar.NamIptVak,
        prod: this.NamFomVar.prod,
        cost: this.NamFomVar.cost
      });
      this.resetForm();
    } else {
      alert("Please fill in all fields before adding.");
    }
  }*/
}
