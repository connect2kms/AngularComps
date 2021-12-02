import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'Why do people buy KitchenAid?',
      content:
        'A KitchenAid allows you to automate part of your process, whether that process is baking, juicing, preparing ice cream, pasta making, grinding meat, or any of the many other things you can do with a KitchenAid and its attachments.',
    },
    {
      title: 'Are KitchenAid mixers still good?',
      content:
        'A KitchenAid allows you to automate part of your process, whether that process is baking, juicing, preparing ice cream, pasta making, grinding meat, or any of the many other things you can do with a KitchenAid and its attachments.',
    },
    {
      title: 'Why is KitchenAid so expensive?',
      content:
        'A KitchenAid allows you to automate part of your process, whether that process is baking, juicing, preparing ice cream, pasta making, grinding meat, or any of the many other things you can do with a KitchenAid and its attachments.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
