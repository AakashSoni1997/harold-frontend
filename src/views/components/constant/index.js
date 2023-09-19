const server = {
    baseUrl: 'http://192.168.2.81:3335',
    baseMongoUrl: 'https://harold-api.sandboxdevelopment.in',
    prod: '',
}
export function baseUrlPostGres() {
    return server.baseMongoUrl
    // http://192.168.2.81:3335
    // if(process.env.REACT_APP_URL === 'prod'){
    //     return server.prod
    // } else { 
    // }
}

export function baseUrlMongoDb() {
    return server.baseMongoUrl
    // if(process.env.REACT_APP_URL === 'prod'){
    //     return server.prod
    // } else {
    // }
}