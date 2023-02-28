import { Account, ID } from "appwrite";
import client from "../config/appwrite";
const account = new Account(client);

// Register User
const createAccount = async (email, password, displayName) =>
  account.create(ID.unique(), email, password, displayName).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );

export default createAccount;
