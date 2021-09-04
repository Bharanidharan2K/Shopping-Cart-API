import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRoutes from './routes/products.js'
import cartRoutes from './routes/cart.js'
import wishlistRoutes from './routes/wishlist.js'
import categoryRoutes from './routes/category.js'

const app = express();
const PORT = 5000;

app.use(cors({ origin : "*"}));

app.use(bodyParser.json())

app.use('/products', productRoutes)

app.use('/category', categoryRoutes)

app.use('/cart', cartRoutes)

app.use('/wishlist', wishlistRoutes)

app.listen(PORT, () => {
    console.log(`Server Running on port : http://localhost:${PORT}`)
});