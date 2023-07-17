import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const element = {
      nativeElement: document.createElement("div")
    };
    const directive = new HighlightDirective(element);
    expect(directive).toBeTruthy();
  });
});
