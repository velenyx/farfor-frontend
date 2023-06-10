import $axios from '../../helpers/axios/axios.js'

class ProductService {
  async getAll() {
    return $axios.get(`/products/`)
  }
}

export default new ProductService()
