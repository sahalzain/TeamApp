import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { node, AppUtilityService } from '../../../services/app.utility.service';



@Component({
    selector: 'messagebox-dialog',
    templateUrl: 'messagebox.component.html'
  })
  export class MessageBoxDialog{
    allNodes:node[]=[];
    constructor(
      public dialogRef: MatDialogRef<MessageBoxDialog>,
      private appUtilityService:AppUtilityService,
      @Inject(MAT_DIALOG_DATA) public data: any) {
this.allNodes=appUtilityService.allNodes.filter(item=>item.id!=data.id);
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }