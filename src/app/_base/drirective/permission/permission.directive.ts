import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit{

  @Input() appPermission: string;

  private listPermission: any[] = ['example.show'];

  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void {
    if (!this.listPermission.includes(this.appPermission)) {
      this.el.nativeElement.remove();
    }
  }

}
