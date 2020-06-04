import {Component} from '@angular/core';
import { element } from 'protractor';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageBoxDialog } from '../items/messagebox/messagebox.component';
import { Subject } from 'rxjs';
import { AppUtilityService, node, link } from '../../services/app.utility.service';

@Component({
  selector: 'home-drag-drop',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog,
    private appUtilityService:AppUtilityService) {
      appUtilityService.allNodes=this.Nodes;
    }
  allComponents=[];
  Links:link[]=[];

Nodes:node[]=[{
  id: "12345",
label: "welcomeMessage",
target: "end",
type: "text",
value: "Hello!!",
}];



update$: Subject<any> = new Subject();


  openMessageDialog(module:any): void {if(!module){
    module=new node();
  }
    const dialogRef = this.dialog.open(MessageBoxDialog, {
      width: '250px',
      data: {id:module.id,label:module.label,value:module.value,target:module.target}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      let elmnt:node=new node();
      if(!result.id){
      elmnt.id=this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');}
      else{
        elmnt.id=result.id;
      }
      elmnt.label=result.label;
      elmnt.type="text";
      elmnt.value=result.value;
      elmnt.target=result.target;
if(result.id){
  this.Nodes = this.Nodes.filter(item => item.id != result.id);
}
      this.Nodes.push(elmnt);
      if(elmnt.target!='end'){
        let newlink:link=new link();
        newlink.id=this.randomString(4, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        newlink.source=elmnt.id;
        newlink.target=elmnt.target;
        this.Links.push(newlink);
      }
      this.update$.next(true);
      }
      this.appUtilityService.allNodes= this.Nodes;
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

  alert(id:string){
    this.openMessageDialog(id)
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


