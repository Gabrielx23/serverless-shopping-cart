import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {createProduct} from "../dao/productDAO";
import middleware from "../middleware";

const createProductHandler: APIGatewayProxyHandler = async (event, _context) => {
    const {productName, price, taxPercent} = event.body;
    const product = await createProduct({productName, price, taxPercent});

    return {statusCode: 201, body: JSON.stringify(product)};
};

export const handler = middleware(createProductHandler);
