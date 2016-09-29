import { Component, ElementRef, Input, OnDestroy, OnInit  } from '@angular/core';

@Component({
  selector: 'app-sh-spinner',
  templateUrl: './sh-spinner.component.html',
  styleUrls: ['./sh-spinner.component.css']
})

export class ShSpinnerComponent implements ElementRef, OnDestroy, OnInit  {
  nativeElement = {};
  animationIndex = 0;

  requestAnimationFrame: (callback: () => void) => void = (function () {
    return window.requestAnimationFrame ||
      (<any>window).webkitRequestAnimationFrame ||
      (<any>window).mozRequestAnimationFrame ||
      (<any>window).oRequestAnimationFrame ||
      (<any>window).window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
      };
  })();

  // attributes from html
  @Input() type: string | undefined = this.type || 'circle';
  @Input() shape: string = this.shape;
  @Input() opacity: number | undefined = this.opacity || 1;
  @Input() speed: string | undefined = this.speed || '1';
  @Input() diameter: number | undefined = this.diameter || 64;
  @Input() stroke: string = this.stroke;
  @Input() width: number | undefined = this.width || 6;

  elemWidth = this.elementRef.nativeElement.parentElement.clientWidth;
  elemHeight = this.elementRef.nativeElement.parentElement.clientHeight;
  originOffset = (this.diameter === 0) ? 32 : this.diameter / 2;
  originOffsetW = this.elemWidth / 2;
  originOffsetH = (this.elemHeight / 2) - (this.originOffset / 2);
  dims = this.diameter - this.width;
  radius = this.originOffset - ((this.width / 2) + 2);
  reset;
  animationTarget;
  thetaDelta = parseFloat(this.speed) || 2;

  ngOnInit()    { this.doAnim(); }
  ngOnDestroy() { /* todo */ }

  doAnim() {
    switch (this.type) {
      case 'line':
        this.reset = this.elemWidth;
        break;
      case 'square':
        this.reset = this.diameter * 4;
        break;
      case 'circle':
        this.reset = this.diameter * Math.PI;
        break;
      case 'surround': // doesn't currently work. Did once, but I broke it.
        this.reset = (this.elemWidth * 2) + (this.elemHeight * 2);
        break;
    }
    if (this.type === 'circle') {
      this.animationTarget.setAttribute('transform', 'rotate(' + this.animationTarget.currentTheta + ')');
    }
    this.animationTarget.setAttribute('stroke-dasharray', this.animationTarget.currentTheta);
    this.animationTarget.currentTheta += this.thetaDelta;
    if (this.animationTarget.currentTheta >= this.reset) {
      this.animationTarget.currentTheta = 0;
    }
    requestAnimationFrame(this.doAnim);
  }

  constructor(private elementRef: ElementRef) { }

}
