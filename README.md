# svg-spinner 
SVG based spinner for Angular2 - Typescript

Based on a simple svg spinner directive for angular 1.x with circular and linear versions and lots of options.

I was basically flummoxed by the lack of really configurable spinners, or spinners that were based on gif images or css reliant to make icon font elements rotate (accessibility issues with iconfonts were also considered). So, I created this spinner that uses svg. It's small and as long as you understand the css behavoirs of the position attribute, you should be good to go.

The spinners all need to be within a relatively positioned element.
___

## options
 For the circular option, there is the choice of diameter, stroke thickness, stroke colour and opacity.
 The speed, although behaving exactly as expected, is currently user defined and can appear odd, but that is on my list of things to remedy.
 - [shape] - Sanity item so you know what's what - writes it as an id with an index
 - [type] - Set to either 'circle', 'square' or 'line' ('surround' is work in progress). If not used, defaults to 'circle'
 - [strokeWidth] - The stroke width of the spinner. Defaults to 6
 - [diameter] - The diameter of the spinner which if omitted defaults to 24
 - [stroke] - this is the colour of the spinner. Stroke is used as it is an svg element. Default is rgb(0,0,0)
 - [opacity] - How transparent do you want it? Default is .2 and is based on the css values of 0 to 1
 - [overlay] - Takes a hex value. This creates an overlay for the surround type and should be used in conjunction with 'alpha'
 - [alpha] - Takes a float of 0 to 1. 0 being transparent, 1 being opaque. Shouild be used in conjunction with 'overlay' and only affects the 'surround' type.
 - [speed] - This is logarithmic. Below 48px, decimals are best to slow it down. Integers at that size larger than 1 make the speed look kinda silly. However, a diameter of 72 and a speed of 2 or 3 could work quite well. It's up to you really.
 - [linecap] - There are three options: round, square and butt. Square adds padding to the end of the stroke which means that the physical end of the line precedes the mathematical point by half of the stroke width, while 'butt' stops the line at the mathematical point of the line ending.
 
 The linear options are identical except there is no need for the diameter option.
___

## installation

TBD

If using the Angular cli, create a new component and simply copy the content of these files into the respective generated files.

You can see the Angular 1 version working in this plunk: https://plnkr.co/edit/jnSbb1

## Todo
- Fix the endcap option
- All manner of stuff possibly

## Use
Simple circle:
`<div style="display:block;width:100px;height :100px;">`
`   <app-sh-spinner [type]="'circle'" [shape]="'starter'" [diameter]="'50'" [stroke]="'#ed1b1e'" [width]="'5'" [speed]="'0.5'"></app-sh-spinner>`
`</div>`

Simple square:
`<div style="display:block;width:100px;height :100px;">`
`   <app-sh-spinner [type]="'square'" [shape]="'second'" [diameter]="100" [stroke]="'#bada55'" [width]="5" [speed]="'2'" [opacity]=".8"></app-sh-spinner>`
`</div>`

Simple indeterminate line:
`<div style="display:block;width:100px;height :100px;">`
`   <app-sh-spinner [type]="'line'" [shape]="'second'" [diameter]="100" [stroke]="'#bada55'" [width]="5" [speed]="'2'" [opacity]=".8"></app-sh-spinner>`
`</div>`

The 'overlay' and 'alpha' settings are specific to the 'surround' type and have no effect on any other type. 
`<div style="display:block;width:100px;height :100px;">`
`   <app-sh-spinner [type]="'surround'" [shape]="'second'" [diameter]="100" [stroke]="'#bada55'" [width]="15" [speed]="'2'" [opacity]=".8" [overlay]="'#f567fc'" [alpha]="'.4'"></app-sh-spinner>`
`</div>`
