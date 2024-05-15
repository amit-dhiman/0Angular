import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthermessageService {

  constructor() { }
  getmessage(){
    return 'msg from other message service'
  }
}
