import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/item';

@Component({
  selector: 'app-connected-items',
  templateUrl: './connected-items.component.html',
  styleUrls: ['./connected-items.component.scss']
})
export class ConnectedItemsComponent implements OnInit {

  constructor() { }

  items: Item[]

  ngOnInit(): void {
    this.items.push(
      {
        name: "item-Test1",
        price: 55,
        imageBase64: "https://cdn.britannica.com/86/75886-050-B481C97E/Apricots.jpg"
      }
    )
  }

}
