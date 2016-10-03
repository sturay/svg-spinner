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
  @Input() diameter: number | undefined = this.diameter;
  @Input() linecap: string | undefined = this.linecap || 'round';
  @Input() opacity: number | undefined = this.opacity || 1;
  @Input() speed: string | undefined = this.speed || '1';
  @Input() stroke: string = this.stroke;
  @Input() type: string | undefined = this.type || 'circle';
  @Input() shape: string = this.shape;
  @Input() width: number | undefined = this.width || 6;

  thetaDelta; elemWidth; elemHeight; originOffset; originOffsetW; originOffsetH;
  dims; radius; halfwayWCenter; halfwayHCenter; halfwayW; halfwayH; reset;

  ngOnInit() {
    this.elemWidth = this.elementRef.nativeElement.parentElement.clientWidth;
    this.elemHeight = this.elementRef.nativeElement.parentElement.clientHeight;
    this.originOffset = (this.diameter === 0) ? 32 : this.diameter / 2;
    this.originOffsetW = this.elemWidth / 2;
    this.originOffsetH = (this.elemHeight / 2) - (this.originOffset / 2);
    this.dims = this.diameter - this.width * Math.PI;
    this.radius = this.diameter / 2;
    this.halfwayWCenter = this.elemWidth / 2;
    this.halfwayHCenter = this.elemHeight / 2;
    this.halfwayW = this.halfwayWCenter - (this.originOffset / 2) - (this.width / 2);
    this.halfwayH = this.halfwayHCenter - (this.originOffset / 2) - (this.width / 2);
    this.thetaDelta = parseFloat(this.speed);
    console.log(this);
    requestAnimationFrame(this.doAnim.bind(this));
  }
  ngOnDestroy() { /* todo */ }

  doAnim() {
    let animationTarget = this.elementRef.nativeElement.lastElementChild.children[0].children[0].children[0];
    switch (this.type) {
      case 'line':
        this.reset = this.elemWidth;
        break;
      case 'square':
        this.reset = this.diameter * 1.5;
        break;
      case 'circle':
        this.reset = this.diameter * Math.PI;
        break;
      case 'surround': // doesn't currently work. Did once, but I broke it.
        this.reset = (this.elemWidth * 2) + (this.elemHeight * 2);
        break;
    }
    if (animationTarget.currentTheta == null) {
      animationTarget.currentTheta = 0;
    }
    if (this.type === 'circle') {
      animationTarget.setAttribute('transform', 'rotate(' + animationTarget.currentTheta + ')');
    }
    animationTarget.setAttribute('stroke-dasharray', animationTarget.currentTheta);
    animationTarget.currentTheta += this.thetaDelta;
    if (animationTarget.currentTheta >= this.reset) {
      animationTarget.currentTheta = 0;
    }
    requestAnimationFrame(this.doAnim.bind(this));
  }

  constructor(private elementRef: ElementRef) { }

}
