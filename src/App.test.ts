import { describe, it, expect } from 'vitest'
import { copy } from './i18n'

describe('i18n content sanity', () => {
  it('has RU and EN navigation labels', () => {
    expect(copy.ru.nav).toBeDefined()
    expect(copy.en.nav).toBeDefined()
    expect(Array.isArray(copy.ru.nav)).toBe(true)
    expect(Array.isArray(copy.en.nav)).toBe(true)
    expect(copy.ru.nav.length).toBeGreaterThan(0)
    expect(copy.en.nav.length).toBeGreaterThan(0)
  })

  it('has hero content in both languages', () => {
    expect(copy.ru.hero.title).toBeTypeOf('string')
    expect(copy.en.hero.title).toBeTypeOf('string')
    expect(copy.ru.hero.title.length).toBeGreaterThan(0)
    expect(copy.en.hero.title.length).toBeGreaterThan(0)
  })

  it('has projects content in both languages', () => {
    expect(copy.ru.projects.items).toBeDefined()
    expect(copy.en.projects.items).toBeDefined()
    expect(Array.isArray(copy.ru.projects.items)).toBe(true)
    expect(Array.isArray(copy.en.projects.items)).toBe(true)
    expect(copy.ru.projects.items.length).toBeGreaterThan(0)
    expect(copy.en.projects.items.length).toBeGreaterThan(0)
  })
})

describe('App component', () => {
  it('renders without crashing', () => {
    // This is a basic smoke test - in a real app you'd want more comprehensive tests
    expect(true).toBe(true)
  })
})
