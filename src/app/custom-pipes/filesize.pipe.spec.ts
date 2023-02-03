import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {
  it('create an instance', () => {
    const pipe = new FilesizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new FilesizePipe();
    expect(pipe.transform(1048000)).toBe('1.00megabytes');
  });
});
