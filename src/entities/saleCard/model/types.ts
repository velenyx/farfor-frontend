export type SaleId = Brand<Id, 'SaleId'>

export type Sale = {
  pk: SaleId
  title: string
  description: string
  slug: string
  image: string
  conditions: Array<string>
}
