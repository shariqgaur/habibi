import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Result} from './result';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SliderComponent implements OnInit {
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
 
  constructor(private data: DataService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    this.data.getImageData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });

    interval(2000)
    .subscribe(x => {
      if(this.selectedIndex>4){
        this.selectedIndex=0;
      }else{
        this.selectedIndex++;
      }
      
    })
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }


}