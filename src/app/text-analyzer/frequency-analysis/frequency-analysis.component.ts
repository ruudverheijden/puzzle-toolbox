import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-frequency-analysis',
  templateUrl: './frequency-analysis.component.html',
  styleUrls: ['./frequency-analysis.component.sass']
})
export class FrequencyAnalysisComponent implements OnInit, OnChanges {
  @Input() textToAnalyze: string;
  @Output() uniqueChunksEvent = new EventEmitter<string[]>(true); // using async events to prevent Angular change detection issues

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
    const chunkSizeRegex = new RegExp('.{1,' + this.chunkSize + '}', 'g');
    const textToAnalyzeWithoutNewlines = this.textToAnalyze.replace('\n', '');
    const chunks = _.sortBy(textToAnalyzeWithoutNewlines.match(chunkSizeRegex));
    this.uniqueChunksEvent.emit(_.uniq(chunks));
  }

}
