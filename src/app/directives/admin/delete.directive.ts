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
import {
  SweetAlert2Service,
  SweetIcon,
} from 'src/app/services/common/dialogs/sweet-alert2.service';
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
    private spinner: NgxSpinnerService,
    private sweetAlertService: SweetAlert2Service
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
  async onclick() {
    this.sweetAlertService.sweetAlert(
      {
        title: 'Are you sure want to remove?',
        text: 'You will not be able to recover this file!',
        icon: SweetIcon.Warning,
        showCancelButton: true,
        cancelButtonText: 'No, keep it',
        confirmButtonText: 'Yes, delete it!',
      },
      () => {
        this.spinner.show(SpinnerName.BallAtom);
        let td: HTMLTableCellElement = this.element.nativeElement;
        this.httpClientService
          .remove(
            {
              controller: 'products',
            },
            this.id
          )
          .subscribe((data) => {
            $(td.parentElement).animate(
              {
                opacity: 0,
                height: 'toggle',
              },
              700,
              () => {
                this.callback.emit();
              }
            );
          });
      }
    );
  }
}
