import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { DialogComponent } from './dialog.component';
//import { jsPlumb } from 'jsplumb';

export interface Node {
  id: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-dynamic-node',
  template: `
  <div (dblclick)="editNode(node)" class="node"  id="{{node.id}}" style="top: 0; left: 50%;">
    {{node.name}}
    <i (click)="removeNode(node)" class="material-icons close">clear</i>
  </div>`,
  styles: [`
  .node {
  position: relative;
  width: 100px;
  height: 30px;
  padding: 4px;
  box-shadow: 0 10px 40px 0 #B0C1D9;
  text-align: center;
}
 .close {
   font-size: 10px;
   position: absolute;
   right: 9px;
   top: 0px;
   cursor: pointer;
 }
  `]
})
export class DynamicNodeComponent implements AfterViewInit {

  @Input() node: Node;
  @Input() jsPlumbInstance: { addEndpoint: (arg0: string, arg1: { anchor: string; uuid: string; }, arg2: { endpoint: (string | { radius: number; })[] | (string | { radius: number; })[]; paintStyle: { fill: string; } | { fill: string; }; isSource: boolean; scope: string; connectorStyle: { stroke: string; strokeWidth: number; } | { stroke: string; strokeWidth: number; }; connector: (string | { curviness: number; })[] | (string | { curviness: number; })[]; maxConnections: number; isTarget: boolean; connectorOverlays?: (string | { location: number; })[][]; dropOptions: { tolerance: string; hoverClass: string; activeClass: string; }; }) => void; draggable: (arg0: string) => void; removeAllEndpoints: (arg0: any) => void; remove: (arg0: any) => void; deleteEndpoint: (arg0: string) => void; };
  sourceEndPoint: any;
  destinationEndPoint: any;
  exampleDropOptions = {
    tolerance: 'touch',
    hoverClass: 'dropHover',
    activeClass: 'dragActive'
  };
  source = {
    endpoint: ['Dot', { radius: 7 }],
    paintStyle: { fill: '#99cb3a' },
    isSource: true,
    scope: 'jsPlumb_DefaultScope',
    connectorStyle: { stroke: '#99cb3a', strokeWidth: 3 },
    connector: ['Bezier', { curviness: 63 }],
    maxConnections: 1,
    isTarget: false,
    connectorOverlays: [['Arrow', { location: 1 }]],
    dropOptions: this.exampleDropOptions
  };
  destination = {
    endpoint: ['Dot', { radius: 4 }],
    paintStyle: { fill: '#ffcb3a' },
    isSource: false,
    scope: 'jsPlumb_DefaultScope',
    connectorStyle: { stroke: '#ffcb3a', strokeWidth: 6 },
    connector: ['Bezier', { curviness: 23 }],
    maxConnections: 1,
    isTarget: true,
    dropOptions: this.exampleDropOptions
  };
  constructor(private simpleModalService: SimpleModalService) { }
  ngAfterViewInit() {
    this.sourceEndPoint = this.jsPlumbInstance.addEndpoint(this.node.id,
      { anchor: 'Right', uuid: this.node.id + 'right' }, this.source);
    if (this.node.type !== 'start') {
      this.destinationEndPoint = this.jsPlumbInstance.addEndpoint(this.node.id,
        { anchor: 'Left', uuid: this.node.id + 'left' }, this.destination);
    }
    this.jsPlumbInstance.draggable(this.node.id);
  }

  removeNode(node: { id: any; }) {
    this.jsPlumbInstance.removeAllEndpoints(node.id);
    this.jsPlumbInstance.remove(node.id);
  }

  editNode(node: { name: any; type: string; id: string; }) {
    this.simpleModalService.addModal(DialogComponent, {
      title: 'Dialog',
      questions: { name: node.name, type: node.type }
    })
      .subscribe((result) => {
        this.node.name = result.name;
        this.node.type = result.type;
        if (node.type === 'end') {
          this.jsPlumbInstance.deleteEndpoint(node.id + 'right');
        } else {
          this.jsPlumbInstance.addEndpoint(this.node.id,
            { anchor: 'Right', uuid: this.node.id + 'right' }, this.source);
        }
      });
  }
}

