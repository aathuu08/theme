import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { userInfo } from 'os';

@Injectable()
export class NoAuthGuard implements CanActivate {
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('appuser'))
    if(user && user.token!=''){
      return true;
    }else{
      return false;
    }
  }
}
