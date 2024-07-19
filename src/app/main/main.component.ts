import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { MatCardModule } from '@angular/material/card';
import { log } from 'console';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, MatCardModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private localStorageService: LocalStorageService) { }

  list: string[] = []
  dynamicValue = ''
  listPrint: string[] | null = null

  ngOnInit() {
    this.listPrint = this.localStorageService.getItem('list');
    console.log("prsi");
    console.log(this.localStorageService.getItem('list'));
    if (this.localStorageService.getItem('list')) {
      this.list = this.localStorageService.getItem('list');
    }

  }


  addToDo() {
    let toDo = ''
    toDo = this.dynamicValue
    this.dynamicValue = ''
    this.list.push(toDo)
    console.log(this.list);
    let myListString = JSON.stringify(this.list);
    localStorage.setItem('list', myListString);
    this.listPrint = this.localStorageService.getItem('list');
  }

  removeToDo(index: number) {
    console.log(index);
    this.list.splice(index, 1)
    let myListString = JSON.stringify(this.list);
    localStorage.setItem('list', myListString);
    this.listPrint = this.localStorageService.getItem('list');


  }

  removeAll() {
    localStorage.clear()
    this.listPrint = []
    this.list = []
  }
}
