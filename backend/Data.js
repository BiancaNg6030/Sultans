import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'https://freshmeal-interview-org.myshopify.com/',
  storefrontAccessToken: "acc209d3548f1d668afb321b26ae5b05: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"
});
export function pls(){
client.product.fetchAll().then((products) => {
    console.log(products);
  });};