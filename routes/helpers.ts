import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios"

export const getGoogleInsights = async (url: string): Promise<Results> => {
    try {
        const request: AxiosRequestConfig = {
            method: "get",
            url: 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
            params: {
                url,
                "API_KEY": process.env.API_KEY
            },
        }

        let resp: AxiosResponse<any> = await axios(request)

        return {
            performance_score: resp.data.lighthouseResult.categories.performance.score,
            url_tested: resp.data.lighthouseResult.finalUrl
        }
    } catch (error) {
        throw new Error(`Error with Google PageSpeed Insights: ${error.response.data.error.message} `)
    }
}

export interface Results {
    performance_score: Number,
    url_tested: String
}