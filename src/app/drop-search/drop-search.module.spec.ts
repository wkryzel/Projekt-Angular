import { DropSearchModule } from './drop-search.module';

describe('DropSearchModule', () => {
  let dropSearchModule: DropSearchModule;

  beforeEach(() => {
    dropSearchModule = new DropSearchModule();
  });

  it('should create an instance', () => {
    expect(dropSearchModule).toBeTruthy();
  });
});
