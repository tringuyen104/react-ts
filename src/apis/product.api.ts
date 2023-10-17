import { callApi, get } from '../common/apiUtils';
import '../types/Product'

var urlProduct = 'api/v1/product'

export async function getProducts(): Promise<Array<Product>>{
   let products = await get(urlProduct);
   var results = products.data as Array<Product>;
   return results;
}