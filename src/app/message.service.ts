import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';
import { HttpClient } from '@angular/common/http';

//  when we do mesting then we need this @Injectable service
@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private _message = "helo from service"
  constructor(private _http: HttpClient) { }

  getmessage(){
    // return this._othermessageService.getmessage()
    return this._message;
  }

}
