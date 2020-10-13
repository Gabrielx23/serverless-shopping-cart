import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {getProduct} from "../dao/productDAO";
import createError from 'http-errors';
import middleware from "../middleware";

const getProductHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id } = event.pathParameters;
    const product = (await getProduct(id)).Item;

    if (!product) {
        throw new createError.NotFound();
    }

    return {statusCode: 200, body: JSON.stringify(product)};
};

export const handler = middleware(getProductHandler);
