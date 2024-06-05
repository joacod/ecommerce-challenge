import express from 'express'
import cors from 'cors'
import items from '../data.json'
import { randomUUID } from 'crypto'
import { Product } from './models'

const PORT = '3000'
const SERVER_ERROR = 'Unexpected error, try again later'
const products: Product[] = items

const app = express()
app.use(express.json())
app.use(cors())

app.get('/products', (req, res) => {
  return res
    .status(200).json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.filter(x => x.id.toString() === req.params.id)

  if (product.length === 0) {
    return res
      .status(404).json({ error: 'Product not found.' })
  }

  return res
    .status(200).json(product[0])
})

app.post('/products', (req, res) => {
  const product: Product = req.body

  try {
    if ((product.name === '') || (product.description === '')) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    product.id = randomUUID()

    // in-memory data store, to simulate an insert on a DB
    products.push(product)

    return res
      .status(201).json(product)
  } catch (error) {
    return res
      .status(500).json({ error: SERVER_ERROR })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
