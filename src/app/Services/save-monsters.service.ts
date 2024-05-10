import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedMonstersService {

  private savedMonsters: any[] = [];

  private savedMonsterIds: Set<number> = new Set<number>(); //Using sets here to uniquely store the different id's, making sure there's no duplicates

  constructor() { }

  getSavedMonsters(): any[] {
    return this.savedMonsters;
  }

  saveMonster(monster: any): void {
    if (!this.savedMonsterIds.has(monster.id)) /*Checking to see if the set doesn't already contain the id.*/ {
      this.savedMonsters.push(monster); /*If it doesn't, it adds the monster object into savedmonsters array and adds its id to the set */
      this.savedMonsterIds.add(monster.id);
    }
  }

  removeMonster(monster: any): void {
    const index = this.savedMonsters.findIndex(monster => monster.id === monster.id) /*findIndex checks each element in savedMonsters to see if the monster that was passed through is saved*/;
    if (index !== -1) /*returns -1 if a monster was found */ {
      this.savedMonsters.splice(index, 1); //Using splice, we remove the monster from the savedmonster array
      this.savedMonsterIds.delete(monster.id);//Also deletes the id
    }
  }

}
