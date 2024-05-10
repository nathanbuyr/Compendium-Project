import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'monster-list',
    loadComponent: () => import('./monster-list/monster-list.page').then( m => m.MonsterListPage)
  },
  {
    path: 'saved-monsters',
    loadComponent: () => import('./saved-monsters/saved-monsters.page').then( m => m.SavedMonstersPage)
  },
  {
    path: 'equipment',
    loadComponent: () => import('./equipment/equipment.page').then( m => m.EquipmentPage)
  },
  {
    path: 'regions',
    loadComponent: () => import('./regions/regions.page').then( m => m.RegionsPage)
  },
];
