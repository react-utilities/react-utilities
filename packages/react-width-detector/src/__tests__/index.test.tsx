import { WidthProvider, WidthConsumer  } from '../';

describe('WidthDetector', () => {
  it('WidthProvider', () => {
    expect(typeof WidthProvider).toBe('function');
  });

  it('WidthConsumer', () => {
    expect(typeof WidthConsumer).toBe('function');
  });
});