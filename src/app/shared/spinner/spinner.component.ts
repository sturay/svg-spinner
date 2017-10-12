import { Component, ElementRef, Input, OnDestroy, OnInit  } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.styl']
})

export class SpinnerComponent implements ElementRef, OnDestroy, OnInit  {
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
  @Input() alpha: string | undefined = this.alpha || '.5';
  @Input() diameter: number | undefined = this.diameter;
  @Input() linecap: string | undefined = this.linecap || 'round';
  @Input() opacity: number | undefined = this.opacity || 1;
  @Input() overlay: string | undefined = this.overlay || 'ffffff';
  @Input() speed: string | undefined = this.speed || '1';
  @Input() stroke: string = '#' + this.stroke;
  @Input() type: string | undefined = this.type || 'circle';
  @Input() shape: string = this.shape;
  @Input() width: number | undefined = this.width || 6;
  @Input() divs: number | undefined = this.divs || 0;

  thetaDelta; elemWidth; elemHeight; originOffset; originOffsetW; originOffsetH;
  dims; radius; halfwayWCenter; halfwayHCenter; halfwayW; halfwayH; reset; parts; 
  part; circumferance;

  hexToRGBA(hex, alpha) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 'rgba(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) +
      ',' + parseInt(result[3], 16) + ',' + alpha + ')' : 'rgba(255,255,255,.3)';
  }

  ngOnInit() {

    function makeParts(a){
      if (a % 2) return a * 2;
      else return a;
    }

    this.elemWidth = this.elementRef.nativeElement.parentElement.clientWidth;
    this.elemHeight = this.elementRef.nativeElement.parentElement.clientHeight;
    this.originOffset = (this.diameter === 0) ? 32 : this.diameter / 2;
    this.originOffsetW = this.elemWidth / 2;
    this.originOffsetH = (this.elemHeight / 2) - (this.originOffset / 2);
    this.dims = this.diameter - this.width * Math.PI;
    this.circumferance = this.diameter * Math.PI;
    this.parts = makeParts(this.divs);
    this.radius = this.diameter / 2;
    this.halfwayWCenter = this.elemWidth / 2;
    this.halfwayHCenter = this.elemHeight / 2;
    this.halfwayW = this.halfwayWCenter - this.radius - this.width;
    this.halfwayH = this.halfwayHCenter - this.radius - this.width;
    this.overlay = this.hexToRGBA(this.overlay, parseFloat(this.alpha));
    this.thetaDelta = parseFloat(this.speed);
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
        this.reset = this.diameter * 4;
        break;
      case 'circle':
        this.reset = this.diameter * Math.PI;
        break;
      case 'surround':
        this.reset = (this.elemWidth * 2) + (this.elemHeight * 2);
        break;
    }
    if (animationTarget.currentTheta == null) {
      animationTarget.currentTheta = 0;
    }
    if (this.type === 'circle') {
      animationTarget.setAttribute('transform', 'rotate(' + animationTarget.currentTheta + ')');
    }

    function splitLine(a, b, c, d){
      let e = a / b;
      let f = e - (c / 2)
      let g = e + (c / 2)
      e.toString();f.toString();g.toString();
      if(d === 'round')
        return f + ', ' + g;
      else
        return e + ', ' + e;
    }

    if (this.parts > 0) {
      animationTarget.setAttribute('stroke-dasharray', splitLine(this.circumferance, this.parts, this.width, this.linecap));
    }
    else{
      animationTarget.setAttribute('stroke-dasharray', animationTarget.currentTheta);
    }
    animationTarget.currentTheta += this.thetaDelta;
    if (animationTarget.currentTheta >= this.reset && !this.parts) {
      animationTarget.currentTheta = 0;
    }
    requestAnimationFrame(this.doAnim.bind(this));

  }

  constructor(private elementRef: ElementRef) { }

}
