import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { SavedMonstersService } from '../Services/save-monsters.service';
import { IonHeader, IonToolbar,IonCardContent, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-saved-monsters',
  templateUrl: './saved-monsters.page.html',
  styleUrls: ['./saved-monsters.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,IonCardContent, IonContent, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonThumbnail, IonButton]
})
export class SavedMonstersPage implements OnInit {

  savedMonsters: any[] = [];

  constructor(private savedMonstersService: SavedMonstersService, private toastController: ToastController) { }

  ngOnInit() {
    this.savedMonsters = this.savedMonstersService.getSavedMonsters();
  }

  async removeMonster(monster: any): Promise<void> /*Returns with a promise, making it return with a fulfill or fail */{
    this.savedMonstersService.removeMonster(monster);
    const toast = await this.toastController.create({ //await is used so method can complete and resolves promise
      message: `${monster.name} removed!`,
      duration: 2000,
      position: 'bottom'
    });
    toast.present(); // Display the toast
  }

}
