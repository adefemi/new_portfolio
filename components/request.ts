import axios, {AxiosError} from "axios"
import { aboutType, blogType, experienceType, homeDataType, projectType, socialLinkType } from "./types"

const baseUrl = "https://api.adefemigreat.com/portfolio-path/"

export const getHomeData = async (): Promise<homeDataType | null> => {
    const resp = await axios.get(baseUrl + "userdetailmodel/").catch(
        (error: AxiosError) => {
   
        }
    )

    if(resp){
        return resp.data[0] as homeDataType
    }
    return null
}

export const getSocialLinks = async (): Promise<socialLinkType[] | []> => {
    const resp = await axios.get(baseUrl + "usersociallink/").catch(
        (error: AxiosError) => {

        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getAboutParagraphs = async (): Promise<aboutType[] | []> => {
    const resp = await axios.get(baseUrl + "aboutcontent/").catch(
        (error: AxiosError) => {
 
        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getExperiences = async (): Promise<experienceType[] | []> => {
    const resp = await axios.get(baseUrl + "experience/").catch(
        (error: AxiosError) => {
          
        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getProjects = async (): Promise<projectType[] | []> => {
    const resp = await axios.get(baseUrl + "project/").catch(
        (error: AxiosError) => {
       
        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getBlogs = async (): Promise<blogType[] | []> => {
    const resp = await axios.get(baseUrl + "blog/").catch(
        (error: AxiosError) => {

        }
    )

    if(resp){
        return resp.data
    }

    return []
}