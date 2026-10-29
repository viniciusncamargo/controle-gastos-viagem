export function converterParaReais(valor, cotacao) {
  return Math.round(valor * cotacao * 100) / 100
}
