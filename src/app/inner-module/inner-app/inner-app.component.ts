import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'inner-app',
  templateUrl: './inner-app.component.html',
  styleUrls: ['./inner-app.component.scss']
})
export class InnerAppComponent implements OnInit {
  title = ' Angular jsPlumb Integration';
  nodes = [{ id: 'Node0', name: 'Start', type: 'start' }];
  index = 0;

  ngOnInit() {
    this.addNode(8);
  }

  addNode(n: number) {
    for (let i = 0; i < n; i++) {
      this.nodes.push({
        id: 'Node' + (this.index + 1),
        name: 'Node' + (this.index + 1),
        type: ''
      });
      this.index += 1;
    }
  }
}

