import { Client, Account } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({email, name, password}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, name);

            if (userAccount) {
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount() :: ", error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login() :: ", error);  
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ", error);
        }
    }
    
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout() :: ", error);
        }
    }
}

const authService = new AuthService();

export default authService;