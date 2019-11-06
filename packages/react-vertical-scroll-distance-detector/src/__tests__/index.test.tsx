import { VerticalScrollDistanceProvider, VerticalScrollDistanceConsumer,  } from '../';
// import { MockScrollDistanceImplementation } from '../Mock'

describe('VerticalScrollDistanceDetector', () => {
  it('VerticalScrollDistanceProvider', () => {
    expect(typeof VerticalScrollDistanceProvider).toBe('function');
  });

  it('VerticalScrollDistanceConsumer', () => {
    expect(typeof VerticalScrollDistanceConsumer).toBe('function');
  });
});