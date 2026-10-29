import { describe, expect, it } from 'vitest'
import { converterParaReais } from './moeda'

describe('converterParaReais', () => {
  it('multiplica o valor pela cotação', () => {
    expect(converterParaReais(10, 5)).toBe(50)
  })

  it('arredonda para centavos', () => {
    expect(converterParaReais(0.1, 3)).toBe(0.3)
  })

  it('devolve zero quando o valor é zero', () => {
    expect(converterParaReais(0, 5.43)).toBe(0)
  })
})
