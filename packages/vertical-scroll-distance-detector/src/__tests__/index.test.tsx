import {
  useVerticalScrollDistance,
  VerticalScrollDistanceProvider,
  VerticalScrollDistanceContext,
  VerticalScrollDistanceConsumer,
} from '../index'

describe('VerticalScrollDistanceDetector', () => {
  describe('initial setup', () => {
    it('VerticalScrollDistanceProvider exists', () => expect(VerticalScrollDistanceProvider).toBeDefined())
    it('VerticalScrollDistanceConsumer exists', () => expect(VerticalScrollDistanceContext).toBeDefined())
    it('useVerticalScrollDistance exists', () => expect(useVerticalScrollDistance).toBeDefined())
    it('VerticalScrollDistanceConsumer exists', () => expect(VerticalScrollDistanceConsumer).toBeDefined())
  })
})
