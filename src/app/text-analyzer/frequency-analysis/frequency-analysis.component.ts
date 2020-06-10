import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-frequency-analysis',
  templateUrl: './frequency-analysis.component.html',
  styleUrls: ['./frequency-analysis.component.sass']
})
export class FrequencyAnalysisComponent implements OnInit {
  @Input() textToAnalyze: string;
  @Output() chunks: string[];
  @Output() uniqueChunks: string[];

  chunkSize = 2;
  ignoreSpaces = true;

  constructor() { }

  ngOnInit() {
    this.analyseFrequency();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.analyseFrequency();
  }

  analyseFrequency(): void {
    if (this.ignoreSpaces) {
      this.textToAnalyze = this.textToAnalyze.split(' ').join('');
    }

    this.getChunks();
  }

  private getChunks(): void {
    this.chunks = _.sortBy(this.textToAnalyze.match(new RegExp('.{1,' + this.chunkSize + '}', 'g')));
    this.uniqueChunks = _.uniq(this.chunks);
    console.log(this.chunks);
  }

}
