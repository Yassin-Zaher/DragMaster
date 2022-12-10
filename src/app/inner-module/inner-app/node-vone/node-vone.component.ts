import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Input, OnChanges } from '@angular/core';
import { NodeServiceService } from './node-service.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-node-vone',
  templateUrl: './node-vone.component.html',
  styleUrls: ['./node-vone.component.scss']
})
export class NodeVOneComponent implements OnChanges, AfterViewInit {


  @Input() nodes: any[];
  @ViewChild('nodes', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(private nodeService: NodeServiceService, private simpleModalService: SimpleModalService) {
  }

  ngAfterViewInit() {
    this.nodeService.jsPlumbInstance.bind('connection', info => {
      this.simpleModalService.addModal(DialogComponent, {
        title: 'Dialog',
        questions: { name: '', type: '' }
      })
        .subscribe((result) => {
          const targetNode = this.nodes.find(node => node.id === info.targetId);
          if (targetNode) {
            targetNode.name = result.name;
            targetNode.type = result.type;
            if (targetNode.type === 'end') {
              this.nodeService.jsPlumbInstance.deleteEndpoint(info.targetId + 'right');
            }
          }
        });
    });
  }

  ngOnChanges() {
    this.nodeService.setRootViewContainerRef(this.viewContainerRef);
    this.nodeService.clear();
    if (this.nodes.length > 0) {
      this.nodes.forEach(node => {
        this.nodeService.addDynamicNode(node);
      });
    }
  }
}
