import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicHiglight]',
})
export class BasichightlightDirective implements OnInit {
  @Input() hilightColor = 'green'
  @Input() defaultColor = 'transparent'

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') mouseOver() {
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = this.hilightColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.render.setStyle(this.el.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'backround-color', this.defaultColor)
  }
}
