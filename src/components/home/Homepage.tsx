import * as React from 'react';
import { useEffect, useState, ReactNode } from 'react';
import { getProducts } from '../../apis/product.api';
import '../../types/Product';
import CardShop from '../cards/CardShop';
import _ from 'lodash';

type HomePageProps = {
    message?: string,
    children?: ReactNode
}

const HomePage = ({ message, children }: HomePageProps) => {
    const [products, setProducts] = useState<Array<Product>>()

    async function callApi() {
        let result = await getProducts();
        setProducts(result);
    }
    useEffect(() => {
        callApi();
    }, []);

    // {
    //     "id": "c2a38faa-03e3-4ac1-9a37-171cbafd5c28",
    //     "name": "Product 003",
    //     "description": "Product 003",
    //     "price": 123,
    //     "category": "product",
    //     "path": "https://s3service.s3.amazonaws.com/images/c5a41eb9-4ce2-4502-9135-52435a9deac6.jpg",
    //     "orderItems": []
    //   },

    return (
        <div className='homepage'>
            <div className="row">
                {
                    _.isEmpty(products) ? <p>This is site deployed to AWS Amplify</p> : products.map(p => (
                        <React.Fragment key={p.id}>
                            <CardShop item={p} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;