import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../Services/movie.service';
import { SavedMonstersService } from '../Services/save-monsters.service';
import { IonHeader, IonToolbar,IonCardContent, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButton, IonButtons, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.page.html',
  styleUrls: ['./monster-list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,IonCardContent, IonContent, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButton, IonButtons, IonLabel],
})
export class MonsterListPage implements OnInit {

  monsters:any[] = [];
  constructor(private savedMonstersService: SavedMonstersService, private movieService:MovieService) {}

ngOnInit() {
    this.movieService.GetMonsterData().subscribe(
      (data)=>{
        this.monsters = data.data;
      }
    );
}

saveMonster(monster: any) {
  this.savedMonstersService.saveMonster(monster);
}

//'m' here is used as a callback for the some() method, which searches through each element of the array until it finds the id its satisfied with
isMonsterSaved(equip: any): boolean {
  return this.savedMonstersService.getSavedMonsters().some(m => m.id === equip.id);
}

//Sorts the list by alphabetical order
sortByName() {
  this.monsters.sort((a, b) => a.name.localeCompare(b.name));
}

}

