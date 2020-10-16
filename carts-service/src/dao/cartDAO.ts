import {DynamoDB, cartsTableName} from "../dynamoDB";
import {Cart} from "../schemas/cart";
import {v4 as uuid} from 'uuid';

export const createCart = async (cartData: Cart) => {
    const now = new Date().toISOString();

    const cart = {
        id: uuid(),
        createdAt: now,
        updatedAt: now,
        ...cartData
    };

    await DynamoDB.put({
        TableName: cartsTableName,
        Item: cart
    }).promise();

    return cart;
};

export const updateCart = async (id: string, cartData: Cart) => {
    const cart = await DynamoDB.update({
        TableName: cartsTableName,
        Key: { id: id },
        UpdateExpression: "set cartName = :cartName, products = :products, updatedAt = :updatedAt",
        ExpressionAttributeValues: {
            ":cartName": cartData.cartName,
            ":products": cartData.products,
            ":updatedAt": new Date().toISOString()
        },
        ReturnValues: "UPDATED_NEW"
    }).promise();

    return cart.Attributes;
};

export const deleteCart = async (id: string) => {
    const cart = await DynamoDB.delete({
        TableName: cartsTableName,
        Key: { id: id },
        ConditionExpression: "id = :id",
        ExpressionAttributeValues: { ":id": id }
    }).promise();

    return cart.Attributes;
};

export const getCarts = async () => {
    return await DynamoDB.scan({
        TableName: cartsTableName
    }).promise();
};

export const getCart = async (id: string) => {
    return await DynamoDB.get({
        TableName: cartsTableName,
        Key: {id: id}
    }).promise();
};