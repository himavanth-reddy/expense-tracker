import { Client } from "appwrite";
const client = new Client();

client
  .setEndpoint("http://192.168.0.106/v1")
  .setProject("63e7b67fa1ed188c6c2f");

export default client;
