import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter } from 'rxjs/operators'



@Component({
  selector: 'app-bmirechner',
  templateUrl: './bmirechner.component.html',
  styleUrls: ['./bmirechner.component.css']
})
export class BmirechnerComponent implements OnInit {
  slider: number = 34;

  bmiForm = new FormGroup({
    weight: new FormControl(),
    height: new FormControl(),

  });

  answer: string

  constructor() { }

  ngOnInit(): void {
    this.bmiForm.statusChanges.pipe(
      //filter(value => value === 'VALID'),
      delay(100)

    ).subscribe(() => {

      const weight = this.bmiForm.get('weight').value;
      const height = this.bmiForm.get('height').value / 100;
      let bmi: any = weight / Math.pow(height, 2);

      bmi = bmi.toFixed(1)


      this.answer = bmi.toString();

    })
  }

}
