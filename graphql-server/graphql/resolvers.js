import Product from "../model/Product.js";

const resolvers = {
  Query: {
    products: async (_, { limit, page }) => {
      let offset = limit * (page - 1)
      const product =  await Product.find().limit(limit).skip(offset)
      const productCount =  await Product.countDocuments();
      return {
        count: productCount,
        page, 
        limit,
        data: product,
      }
    },
    product: async (_, { id }) => {
      return await Product.findById(id);
    },
  },
  Mutation: {
    create: async (_, { productInput }) => {
        let product = await Product.create(productInput);
        product.id = product._id
      return product
    },
    update: async (_, { id, productInput }) => {
        await Product.updateOne({_id: id}, productInput);
      return await Product.findById(id)
    },
    delete: async (_, { id }) => {
        await Product.deleteOne({_id: id});
      return true
    },
    
  },
};

export default resolvers;
