import axios from 'axios'

const $http = axios.create({
    timeout: 20000
})

$http.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return config
    }
)
$http.interceptors.response.use(
    config => {
        // console.log(config)
        return config.data
    }
)

export default $http
