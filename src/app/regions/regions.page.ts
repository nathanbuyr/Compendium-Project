import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../Services/movie.service';
import { IonHeader, IonToolbar,IonCardContent, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButton, IonButtons, IonLabel, IonList, IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,IonCardContent, IonContent, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButton, IonButtons, IonLabel, IonList, IonItem],
})
export class RegionsPage implements OnInit {

  regions:any[] = [];
  selectedRegion: any;

  constructor(private movieService:MovieService, ) { }

  ngOnInit() {
    this.movieService.GetRegionData().subscribe(
      (data)=>{
        this.regions = data.data;
      }
    );
}

showShrines(region: any) {
  this.selectedRegion = region;
}
}
