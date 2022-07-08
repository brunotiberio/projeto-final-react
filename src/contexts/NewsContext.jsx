import { createContext, useState } from "react"; 
import { api } from "../services/api";

export const NewsContext = createContext([])

export const NewsProvider = ({children}) =>{

    const [allNews, setAllNews] = useState();

    async function getAllNews(){
        try {

            const response = await api.get("/articles")

            setAllNews(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <NewsContext.Provider value={{ getAllNews, allNews }}> {children} </NewsContext.Provider>
    )
}