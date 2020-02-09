const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const { getResponseHeaders } = require('./utils');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async event => {
  try {
    const country = decodeURIComponent(event.pathParameters.country);
    const params = {
      TableName: tableName,
      IndexName: 'country-timestamp-index',
      KeyConditionExpression: 'country = :country',
      ExpressionAttributeValues: {
        ':country' : country
      }
    };
    const data = await dynamodb.query(params).promise();
    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify(data)
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: e.statusCode ? e.statusCode : 500,
      body: JSON.stringify({
        error: e.name ? e.name : 'Exception',
        message: e.message ? e.message : 'Unknown error'
      })
    };
  }
};
