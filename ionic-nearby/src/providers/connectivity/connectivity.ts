import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';

declare var Connection;

@Injectable()
export class ConnectivityProvider {
  onDevice: boolean;

  constructor(public platform: Platform, public network: Network) {
    //make app know of platform used
    this.onDevice = this.platform.is('cordova');
  }

  //detect if there is internet
  isOnline(): boolean{
    if(this.onDevice && this.network.type){
      return this.network.type !== Connection.NONE;
    }
    else{
      return navigator.onLine;
    }
  }

  //detect if there is no internet
  isOffline(): boolean{
    if(this.onDevice && this.network.type){
      return this.network.type === Connection.NONE;
    }
    else{
      return !navigator.onLine;
    }
  }
}
