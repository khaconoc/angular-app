import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-element',
  templateUrl: './support-element.component.html',
  styleUrls: ['./support-element.component.scss']
})
export class SupportElementComponent implements OnInit {

  isLoadingOne = false;
  isLoadingTwo = false;

  current = 0;

  index = 'First-content';
  constructor() { }

  ngOnInit(): void {
  }

  log(str: string): void {

  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
