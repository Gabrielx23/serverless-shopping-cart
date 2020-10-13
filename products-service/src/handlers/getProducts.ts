import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {getProducts} from "../dao/productDAO";
import middleware from "../middleware";

const getProductsHandler: APIGatewayProxyHandler = async (event, _context) => {
    const products = await getProducts();

    return {statusCode: 200, body: JSON.stringify(products.Items)};
};

export const handler = middleware(getProductsHandler);
