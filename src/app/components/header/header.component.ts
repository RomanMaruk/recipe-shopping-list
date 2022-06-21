import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navigateText = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navigate(text: string) {
    this.navigateText.emit(text)
  }
}
