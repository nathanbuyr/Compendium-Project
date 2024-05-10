import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar,IonCardContent, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,IonCardContent, IonContent, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterLinkWithHref, IonButton],
})
export class HomePage implements OnInit{
  monsters:any = [];
  constructor(private movieService:MovieService) {}

  /*
  Initiallizing the api and putting the data into the monsters variable.
  MovieService name used from previous lab work.
  */
ngOnInit() {
    this.movieService.GetMonsterData().subscribe(
      (data)=>{
        this.monsters = data.data;
      }
    );
}

}