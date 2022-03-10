import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myoutput = this.myCalc();

  progressval = 99;



  constructor() { }

  ngOnInit(): void {


  }

  myCalc(): any {
    function secondsToHM(sec, hideEmpty?): string {
      // Needs to be done because sometimes seconds is less than 0 seconds and then is negative
      const isNegativeTime = sec < 0 ? true : false,
        seconds = isNegativeTime ? sec * -1 : sec,
        hours = Math.floor(seconds / 3600),
        minutes = Math.floor((seconds - hours * 3600) / 60);

      let returnString,
        hoursString = hours.toString(),
        minutesString = minutes.toString();

      if (hours < 10) {
        hoursString = "0" + hours.toString();
      }
      if (minutes < 10) {
        minutesString = "0" + minutes;
      }
      returnString = "" + hoursString + " Stunden " + minutesString + " Minuten";
      if (hideEmpty) {
        if (hours === 0) {
          returnString = minutesString + "m";
        }
      }
      if (isNegativeTime) returnString = "" + returnString;
      return returnString;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate: any = new Date();
    const secondDate: any = new Date("2022-04-16T18:00:00.000Z");
    const startDate: any = new Date("2022-03-01T22:00:00.000Z");

    const diffDaysStart = (firstDate.getTime() - startDate.getTime()) / 1000;

    const diffDaysFromStart = Math.round(Math.abs((startDate - firstDate) / oneDay));

    let ret: string = '';

    ret += 'Kein 🍺 &nbsp;seit ' + secondsToHM(diffDaysStart) + ' (' + diffDaysFromStart + ' Tage)<br />';

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    const totalDays = Math.round(Math.abs((startDate - secondDate) / oneDay));

    let breakPoint = 2,
      pastCount = 1;


    const repeatSymbol = (times, breakStart?) => {
      const devider = 1;
      times = times / devider;

      let ret = '';
      for (let i = 0; i < times; i++) {
        ret += '-';
        if (breakPoint === 10) {
          ret += `'`;
          breakPoint = 1;
        }

        if ((pastCount) === (totalDays / 2 / devider)) {
          ret += '+';
        }
        breakPoint++;
        pastCount++;
      }
      return ret;
    }


    var dif = new Date().getTime() - secondDate.getTime();
    dif = dif / 1000;

    ret += 'Noch ' + secondsToHM(dif) + ' (' + diffDays + ' Tage)<br>';

    const startGraph = repeatSymbol(diffDaysFromStart);
    const endGraph = repeatSymbol(diffDays);

    const spaces = (repeat) => {
      let ret = ''
      for (let i = 0; i < repeat; i++) {
        ret += '&nbsp;';
      }
      return ret;
    }



    return `${ret}|${startGraph}🍺${endGraph}|`;
    //document.write(`| 0${spaces(38)}${totalDays/2}${spaces(38)}${totalDays} |<br/>`);
  }

}
