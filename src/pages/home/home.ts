import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  channelId='UCVd1nb-8vlK4kBgZBIODvjQ'
  playlists: Observable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, private ytProvider: YtProvider) {
 
  }
  searchPlaylists(){
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
   
  
  }
  openPlaylist(id){
    this.navCtrl.push('PlaylistPage', {id:id});
  }

}
