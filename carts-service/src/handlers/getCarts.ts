import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {getCarts} from "../dao/cartDAO";
import middleware from "../middleware";

const getCartsHandler: APIGatewayProxyHandler = async (event, _context) => {
    const carts = await getCarts();

    return {statusCode: 200, body: JSON.stringify(carts.Items)};
};

export const handler = middleware(getCartsHandler);
