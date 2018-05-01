import { Component, ElementRef, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  /*
  newServerName = '';
  newServerContent = '';
  */

  @ViewChild('serverContentNew') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameNew: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameNew.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameNew: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameNew.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
