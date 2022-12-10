import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../shared/model/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input()
  item: Item

  ngOnInit(): void {
  }

}
