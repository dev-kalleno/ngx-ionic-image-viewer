// tslint:disable-next-line

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@Component({
  selector: 'ion-img-viewer',
  templateUrl: './ngx-ionic-image-viewer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxIonicImageViewerComponent implements OnInit {
  @Input() alt?: string;
  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src: string;
  @Input() srcFallback?: string;
  @Input() srcHighRes?: string;
  @Input() swipeToClose?: boolean;
  @Input() text?: string;
  @Input() title?: string;

  constructor(public modalController: ModalController) {}

  async viewImage(
    src: string,
    srcFallback: string = '',
    srcHighRes: string = '',
    title: string = '',
    text: string = '',
    scheme: string = 'auto',
    slideOptions: object = {},
    swipeToClose: boolean = true
  ) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src,
        srcFallback,
        srcHighRes,
        title,
        text,
        scheme,
        slideOptions,
        swipeToClose
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  ngOnInit() {}
}
