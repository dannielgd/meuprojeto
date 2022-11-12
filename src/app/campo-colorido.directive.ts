import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

    @HostBinding('style.backgroundColor') corDeFundo: string = 'transparent';

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = 'yellow'
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //     'background-color', 'yellow');
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent'
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //     'background-color', 'transparent');
  }

}
