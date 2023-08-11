import { describe, test, expect } from 'vitest'

describe('Operaciones basicas', () => {
  test('Deberia sumar 2 numeros', () => {
    expect(2 + 2).toBe(4)
  })

  test('Deberia restar 2 numeros', () => {
    expect(8 - 2).toBe(6)
  })
})
