import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

    @Input('appCampoColorido') cor = 'gray';

    @HostBinding('style.backgroundColor') corDeFundo: string = 'transparent';

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //     'background-color', 'yellow');
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent'
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //     'background-color', 'transparent');
  }

}
