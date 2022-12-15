import { HtmlParser } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerName } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private httpClientService: HttpClientService,
    private spinner: NgxSpinnerService
  ) {
    const img: HTMLImageElement = renderer.createElement('img');
    img.setAttribute('src', '../../assets/img/delete.png');
    img.setAttribute('style', 'cursor:pointer;');
    img.width = 20;
    img.height = 20;
    renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener('click')
  onclick() {
    this.spinner.show(SpinnerName.BallAtom);
    let td: HTMLTableCellElement = this.element.nativeElement;
    this.httpClientService
      .remove(
        {
          controller: 'products',
        },
        this.id
      )
      .subscribe((data) => console.log(data));
    $(td.parentElement).fadeOut(2000, () => {
      this.callback.emit();
    });
  }
}
