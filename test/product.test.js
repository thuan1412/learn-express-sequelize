const fetch = require('node-fetch');

const DOMAIN = process.env.TEST_DOMAIN || 'http://localhost:4321';

it('create and get product', async () => {
  const productData = {
    product: {
      name: 'test product',
      price: 1000,
    },
  };
  const res = await fetch(`${DOMAIN}/products`, {
    method: 'POST',
    body: JSON.stringify(productData),
    headers: { 'Content-Type': 'application/json' },
  });

  const createdProduct = (await res.json()).product;
  expect(res.status).toBe(200);

  const getRes = await fetch(`${DOMAIN}/products/${createdProduct.id}`, {
    method: 'GET',
  });

  const { product } = await getRes.json();
  expect(getRes.status).toBe(200);
  expect(product.id).toBe(createdProduct.id);
});
