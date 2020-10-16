import AWS from "aws-sdk";

export const cartsTableName = 'CartsTable';
export const DynamoDB = new AWS.DynamoDB.DocumentClient();
