import { FilterBar } from '@/components/FilterBar/FilterBar'
import { Header } from '@/components/Header/Header'
import { Product } from '@/components/Product/Product'
import { Products } from '@/components/Products/Products'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
export interface Product {
  name: string
  id: string
  price_in_cents: number
  image_url: string
}

export const getStaticProps: GetStaticProps<{
  products: Product[]
}> = async () => {
  const query = `
  query {   
      allProducts(page: 0, perPage:12) {
        name
        image_url
        id
        price_in_cents
      }
  }
`
  const res = await fetch('http://localhost:3333', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: { 'Content-Type': 'application/json' },
  })
  const products = await res.json()
  return { props: { products: products.data.allProducts } }
}
export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Header />
      <FilterBar />
      <Products products={products} />
    </div>
  )
}
