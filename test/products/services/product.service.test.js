const {
  createProduct,
  getProduct,
} = require('../../../src/products/services/product.service');

let createdProduct;
it('create product - success', async () => {
  const productData = {
    name: 'test',
    price: 1234,
    comparePrice: 100,
    description: 'nothing',
  };
  createdProduct = await createProduct(productData);
  expect(createdProduct.name).toEqual(productData.name);
});

it('get product - success', async () => {
  await expect(getProduct(1)).resolves.not.toThrowError();
});

it('create product - without name', async () => {
  const productData = {
    price: 1234,
    comparePrice: 100,
    description: 'nothing',
  };
  await expect(createProduct(productData)).rejects.toThrowError();
});
