import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.sass']
})
export class TextAnalyzerComponent implements OnInit {
  textToAnalyze = 'Analyze this text please!';
  result = {
    numberOfChars: 0,
    uniqueChars: [],
    numberOfUniqueChars: 0
  };

  constructor() { }

  ngOnInit() {
    this.analyzeText();
  }

  analyzeText() {
    this.countNumberOfChars();
    this.getUniqueChars();
  }

  private countNumberOfChars(): void {
    this.result.numberOfChars = this.textToAnalyze.length;
  }

  private getUniqueChars(): void {
    this.result.uniqueChars = _.sortedUniq(_.sortBy(this.textToAnalyze));
    this.result.numberOfUniqueChars = this.result.uniqueChars.length;
  }

}
