import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  done = [
    'Mateus',
    'Rômulo',
    'Fred',
    'Rodrigo',
    'Damatta',
    'Chicão',
    'Andressa',
    'Maguila',
    'Ernesto',
    'Léo',
    'Camori',
  ];

  todo: string[] = [];
  finish: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  sorted = 'Sortear';
  random: number | undefined;
  sortead() {
    if (this.done.length == 0) return;
    this.random = this.randomNumber(0, this.done.length - 1);
    this.sorted = this.done[this.random];
    this.finish.push(this.sorted);
    delete this.done[this.random];
    this.done = this.done.filter((e) => e);
    console.log(this.done);
  }

  randomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
