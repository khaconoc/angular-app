import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ElementRef,
  AfterViewInit,
  OnChanges
} from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'img-server',
  templateUrl: './img-server.component.html',
  styleUrls: ['./img-server.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImgServerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() src: any;
  @Input() alt: any;
  @Input() class: any;
  public isLoad = false;
  public srcloading: any;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.startLoading();
  }

  ngOnChanges(): void {
    if (this.isLoad) {
      this.isLoad = false;
      $(this.el.nativeElement).addClass(this.class);
      this.startLoading();
      this.endLoading();
    }
  }

  ngAfterViewInit(): void {
    this.endLoading();
  }

  startLoading(): void {
    this.srcloading = `${
      environment.apiUrl
      }/api/file/dowload?url=${this.src}&w=${10}&h=${10}`;
  }

  endLoading(): void {
    const outside = this;
    setTimeout(() => {
      const img = outside.el.nativeElement;
      const w = $(img).width();
      const h = $(img).height();

      this.src = `${
        environment.apiUrl
        }/api/file/dowload?url=${outside.src}&w=${w}&h=${h}`;
      $(outside.el.nativeElement).removeClass(outside.class);
      outside.isLoad = true;
    }, 0);
  }
}
