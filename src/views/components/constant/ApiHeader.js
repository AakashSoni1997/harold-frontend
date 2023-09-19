export function apiHeader(unAuth = null) {
    console.log("unAuth is ",unAuth)
    if (unAuth) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    } 
    if(unAuth == null) {
        const userDetail = localStorage.getItem("security_auth")
        console.log("userDetail is", userDetail)
        const token = JSON.parse(userDetail).token
        let authToken = `Bearer ${token}`
        console.log("token is", token )
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authToken
        }
    }
}