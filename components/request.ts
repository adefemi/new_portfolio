import axios, {AxiosError} from "axios"
import { aboutType, homeDataType, socialLinkType } from "./types"

const baseUrl = "https://api.adefemigreat.com/portfolio-path/"

export const getHomeData = async (): Promise<homeDataType | null> => {
    const resp = await axios.get(baseUrl + "userdetailmodel/").catch(
        (error: AxiosError) => {
            console.log(error)
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
            console.log(error)
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
            console.log(error)
        }
    )

    if(resp){
        return resp.data
    }

    return []
}