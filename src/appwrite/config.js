import conf from "../confg/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client=new Client();
    databases;
    bucket;
    n
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    status,
                    featuredImage,userId
            })
        } catch (error) {
            console.log(error)
        }
    }
    async updatePost(slug,{title,featuredImage,content,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
              
            )
            return true 
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
        } catch (error) {
            console.log(error)
            return false
        }

    }
    async getPosts(queries=[Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                queries
            )
          } catch (error) {
            console.log(error)
            return false
          }
    }

}
const service=new Service();
export default service