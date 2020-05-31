import {Component} from '@angular/core';
import { element } from 'protractor';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageBoxDialog } from '../items/messagebox/messagebox.component';

@Component({
  selector: 'home-drag-drop',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}
  allComponents=[];

  openMessageDialog(): void {
    const dialogRef = this.dialog.open(MessageBoxDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      let elmnt:Element=new Element();
      elmnt.id=this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      elmnt.name="messageBox";
      elmnt.type="text";
      elmnt.value=result;

      this.allComponents.push(elmnt);
      }
    });
  }

  addItem(type:string){
    if(type=="text"){
      let elmnt:Element=new Element();
      elmnt.id=this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      elmnt.name="messageBox";
      elmnt.type=type;
      elmnt.value="";

      this.allComponents.push(elmnt);

    }
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
remove(id:string){
  this.allComponents= this.allComponents.filter(item => item.id !== id);
}

public dragging: boolean;

  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      return
    }
  }

}

class Element{
  id:string;
  type:string;
  name:string;
  value:string

}

