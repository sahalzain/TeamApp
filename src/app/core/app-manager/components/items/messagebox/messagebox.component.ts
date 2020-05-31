import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    message: string;
  }

@Component({
    selector: 'messagebox-dialog',
    templateUrl: 'messagebox.component.html'
  })
  export class MessageBoxDialog{
    constructor(
      public dialogRef: MatDialogRef<MessageBoxDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }