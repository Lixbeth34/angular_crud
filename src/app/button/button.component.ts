import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements  OnInit, OnChanges, OnDestroy {
  @Input() color!:string;
  @Input() label !: string;
  @Input() selection !: string;
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit ->');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ->');
  }

}
