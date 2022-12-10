import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Input, OnChanges } from '@angular/core';
import { NodeService } from '../node/node.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-main-node',
  templateUrl: './main-node.component.html',
  styleUrls: ['./main-node.component.scss']
})
export class MainNodeComponent implements OnInit {

  @Input() nodes: any[];
  @ViewChild('nodes', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(private nodeService: NodeService, private simpleModalService: SimpleModalService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
