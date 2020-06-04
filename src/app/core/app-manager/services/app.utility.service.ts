import { Injectable } from '@angular/core';

@Injectable()
export class AppUtilityService {
    constructor(
    ) { }

    expectedRequestCount = 0;
    allNodes:any[];

    
}
export class link {
    id:string;
    source: string;
    target: string;
    label: string
  }
 export class node {
    id: string;
    label: string;
    type:string;
    value:string;
    target:string;
  }