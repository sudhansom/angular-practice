import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(): void {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }

    @HostListener('mouseenter') mouseenter(){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = 'green';
    }

    @HostListener('mouseleave') mouseleave(){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}
