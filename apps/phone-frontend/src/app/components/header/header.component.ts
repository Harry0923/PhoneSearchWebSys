import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vghtc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: any[];
  constructor(private router: Router) {
    // this.items = this.mapItem(router.config);
  }

  ngOnInit(): void {}
}
