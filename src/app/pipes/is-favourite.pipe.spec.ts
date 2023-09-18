import { IsFavouritePipe } from './is-favourite.pipe';

describe('IsFavouritePipe', () => {
  it('create an instance', () => {
    const pipe = new IsFavouritePipe();
    expect(pipe).toBeTruthy();
  });
});
