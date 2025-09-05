import { describe, it, expect } from 'vitest'
import { CONTENT, enableSmoothAnchors } from './App'

describe('CONTENT sanity', () => {
  it('has RU and EN labels', () => {
    expect(CONTENT.ru.nav.about).toBeTypeOf('string')
    expect(CONTENT.en.nav.about).toBeTypeOf('string')
  })
})

describe('helpers', () => {
  it('enableSmoothAnchors returns a disposer function', () => {
    const disposer = enableSmoothAnchors(76)
    expect(typeof disposer).toBe('function')
    // cleanup
    disposer()
  })
})

describe('images map', () => {
  it('has a hero image url', async () => {
    const { IMAGES } = await import('./App')
    expect(typeof IMAGES.hero).toBe('string')
    expect(IMAGES.hero.length).toBeGreaterThan(10)
    expect(IMAGES.hero).toContain('google.com/thumbnail')
  })
})
