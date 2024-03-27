import conf from "../confg/conf";
import {Client,Account,ID} from "appwrite"
export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,name,password}){ //yeh step kyu kara??//
        try {
            const userAccount=await this.account.create(ID.unique(),email,name,password)
            
        } catch (error) {
            throw error;
            
        }
        if (userAccount) {
            return this.login({email,password})
        } else {
            return userAccount //humne yeh kyu return kiya??//
            
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
            
        }
       
    }
    async getCurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
            
        }
         return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error; 
            
        }
       
    }
}
const authService=new AuthService() //doubt ki humne object wala kaam kyu kara//
export default authService