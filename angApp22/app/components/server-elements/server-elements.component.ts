import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild 
} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementsComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('Constructor called!');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('"ngOnInit called!"');
    console.log('"Content here:" ' + this.header.nativeElement.textContent);
    console.log('"Paragraph Content here:" ' + this.paragraph.nativeElement.textContent);
  }
  
  ngDoCheck() {
    console.log('"ngDoCheck called!":-' + ' Docheck gets called whenever Angular checks for any changes');
  }
  
  ngAfterContentInit() {
    console.log('"ngAfterContentInit called"!:-' + ' It is called only once and which is the content between the ng-content tag');
    console.log('"Paragraph Content here:" ' + this.paragraph.nativeElement.textContent);
    console.log('That is something I just wanted to add @ContentChild to get access to content which is stroed in another component but then pass on via ngContent');
  }
  
  ngAfterContentChecked () {
    console.log('"ngAfterContentChecked called"!:-' + ' It is called after each change detection cycle.');
  }
  
  ngAfterViewInit() {
    console.log('"ngAfterViewInit called"!:-' + ' It happens after the content has been checked.');
    console.log('Content here: ' + this.header.nativeElement.textContent);
  }
  
  ngAfterViewChecked () {
    console.log('"ngAfterViewChecked called"!');
  }
  
  ngOnDestroy() {
    console.log('---------------------------------------------');
    console.log('"ngOnDestroy called"!');
  }

}
