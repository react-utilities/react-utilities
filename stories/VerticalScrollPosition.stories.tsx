import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { VerticalScrollDistanceProviderProps } from '../packages/vertical-scroll-distance-detector/src/index'

import { VerticalScrollDistance, VerticalScrollDistanceWithHook } from './VerticalScrollDistance'

export default {
  title: 'VerticalScrollDistance',
  component: VerticalScrollDistance,
} as Meta

export const WithConsumer: Story<VerticalScrollDistanceProviderProps> = () => <VerticalScrollDistance />

export const WithHook: Story<VerticalScrollDistanceProviderProps> = () => <VerticalScrollDistanceWithHook />
