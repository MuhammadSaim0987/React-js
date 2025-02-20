import { Client, Databases, Query, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID, 
                slug
                )
        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false
        }
    }

    async getPosts(queries = Query.equal("status", ["active"])){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID, 
                [queries]
            )
        } catch (error) {
            console.log("Appwrite service :: getposts() :: ", error);
            return false
        }
    }

    async createPost({slug, title, featuredImage, content, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title, featuredImage, content, status, userID
                } 
                )
        } catch (error) {
            console.log("Appwrite service :: createPost() :: ", error);
            return false
        }
    }
    
    async updatePost(title, featuredImage, status, content, slug){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title, featuredImage, status, content
                })
        } catch (error) {
            console.log("Appwrite service :: updatePost() :: ", error);
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID, 
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost() :: ", error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID, 
                ID.unique(), 
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: ", error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            );
        } catch (error) {
            console.log("Appwrite service :: deletefile() :: ", error);
            return false
        }
    }

    async getFilePreview(fileID){    
            return await this.bucket.getFilePreview(
                conf.appwriteBucketID,
                fileID
            ).href ;
    }
}

const service = new Service();

export default service;

