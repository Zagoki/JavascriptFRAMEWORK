import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appYTHoverPlay]',
  standalone: true
})
export class YTHoverPlayDirective {
  constructor(private el: ElementRef<HTMLIFrameElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.postMessage('playVideo');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.postMessage('pauseVideo');
  }

  private postMessage(command: string) {
    const iframe = this.el.nativeElement;
    // Only send message if it's a YouTube embed
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: []
        }),
        '*'
      );
    }
  }
}