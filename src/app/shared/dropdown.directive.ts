import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggle = false

  // @HostListener('click') toggleOpen() {
  //   this.toggle = !this.toggle
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.toggle = this.elRef.nativeElement.contains(event.target) ? !this.toggle : false
  }

  constructor(private elRef: ElementRef) { }

}
