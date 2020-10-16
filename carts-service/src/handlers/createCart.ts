import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {createCart} from "../dao/cartDAO";
import middleware from "../middleware";

const createCartHandler: APIGatewayProxyHandler = async (event, _context) => {
    const {cartName, products} = event.body;
    const cart = await createCart({cartName, products});

    return {statusCode: 201, body: JSON.stringify(cart)};
};

export const handler = middleware(createCartHandler);
