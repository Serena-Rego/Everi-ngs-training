/*NamVar = "Serena"
  firstName = "Priyanka"
  lastName = "Rego"
  timeVar = 13
  Array = ["Serena", "Nidhi", "Navya", "Riya", "Sriya", "Ralweena"]
  ProArryVar = [
    {
      "NamVar": "Serena",
      "Prod": "Car",
      "Cost": 50000
    },
    {
      "NamVar": "Nidhi",
      "Prod": "Watch",
      "Cost": 40000
    },
    {
      "NamVar": "Navya",
      "Prod": "Flat",
      "Cost": 200000
    },
    {
      "NamVar": "Riya",
      "Prod": "Hp Envy",
      "Cost": 30000
    },
    {
      "NamVar": "Sriya",
      "Prod": "Dell",
      "Cost": 50000
    }
  ]

  //ascending
  sortByProd(a:any, b:any){
    return a.Prod.localeCompare(b.Prod);
    
  }

  

  //a will be taken as first and b will be taken as second. then a will be considered as second.....

  //descending
  sortByName(a:any, b:any){
    return b.NamVar.localeCompare(a.NamVar);
  }

  sortByCost(a:any, b:any){
    //return a.cost.localeCompare(b.cost);
    return a.Cost-b.Cost
    
  }

  filterCost(){
    return this.ProArryVar.filter(itmVar=>itmVar.Cost<100000)
  }

  // In your Angular component class
TotalCost(): number {
  return this.ProArryVar.reduce((sum, item) => sum + item.Cost, 0);
}

getAbr(val: number): string {
  let abrVar = " ";
  if (val > 10000000) {
    abrVar = (val / 10000000).toFixed(2) + "Cr";
  } else if (val > 100000) {
    abrVar = (val / 100000).toFixed(2) + "L";
  } else if (val > 1000) {
    abrVar = (val / 1000).toFixed(2) + "K";
  }
  return abrVar;
}

seasonVar="Summer"

//Event Handlers

StsVar = false
ChngTime: any;
clrArray = ["Pink", "Yellow", "Lavender"]
currentColor=this.clrArray[0]
colorIndex=0
ngOnInit(){
  setInterval(() => {
    this.colorIndex = (this.colorIndex + 1) % this.clrArray.length;
    this.currentColor = this.clrArray[this.colorIndex];
  }, 1000); 
}

ChngThmFnc(){
  this.StsVar=!this.StsVar;
}

NamBtnClkFnc(){
  alert("Why did u click me")
}

container1Items = ['Task 1', 'Task 2', 'Task 3'];
  container2Items = [""];
  draggedItem: string | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Allows the drop
  }

  onDragStart(event: DragEvent, item: string) {
    this.draggedItem = item;
    event.dataTransfer?.setData('text/plain', item); // Set the data being dragged
  }

  onDrop(event: DragEvent, targetList: string) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain'); // Retrieve the dragged data

    if (data) {
      const item = data;

      if (targetList === 'todo') {
        const index = this.container2Items.indexOf(item);
        if (index > -1) {
          this.container2Items.splice(index, 1);
          this.container1Items.push(item);
        }
      } else if (targetList === 'in-progress') {
        const index = this.container1Items.indexOf(item);
        if (index > -1) {
          this.container1Items.splice(index, 1);
          this.container2Items.push(item);
        }
      }

      this.draggedItem = null; 
    }
  }

  <label>
    <input type="number" 
    name="MblIptVav" 
    #MblIptVav="ngModel"
      [(ngModel)]="FomIptVar.MblIptVar" 
      placeholder="Enter Mobile"
      pattern="[6-9][0-9]{9}">
      <div *ngIf="MblIptVav.invalid && 
    (MblIptVav.touched || MblIptVav.dirty)" class="ErrMsgCls">
      <span *ngIf="MblIptVav.errors?.required">Mobile is required.</span>
      <span *ngIf="MblIptVav.errors?.pattern">Enter valid mobile</span>
    </div>
  </label>

  <br>
  <br>

  <label>
  <input type="email"
    name="MylIptVav" 
    #MylIptVav="ngModel" 
    [(ngModel)]="FomIptVar.MailIptVar" 
    placeholder="Enter Email"
    required
    email>
  <div *ngIf="MylIptVav.invalid && 
    (MylIptVav.touched || MylIptVav.dirty)" class="ErrMsgCls">
      <span *ngIf="MylIptVav.errors?.required">Email is required.</span>
      <span *ngIf="MylIptVav.errors?.email">Enter valid email</span>
    </div>
  </label>

  <br>
  <br>*/