
const axios = require('axios')
export const getTemplateList = () => {
    return axios
                .post(`/fsb/api/fsb_templates`,{
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    return res.data
                })
             
}