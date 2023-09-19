import { baseUrlPostGres } from "../components/constant"
export const getApicalling = async (url) => {
    return (await new Promise((resolve, reject) => {
        fetch(`${baseUrlPostGres()}/api/${url}`, {
            method: "get",
        })
            .then((res => res.json()))
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return reject(err);
            })
    }))
}

export const postApicalling = async (url, value) => {
    console.log("fdfsfghsdfgfhsf");
    return (await new Promise((resolve, reject) => {
        fetch(`${baseUrlPostGres()}/api${url}`, {
            method: "post",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(value)
        })
            .then((res => res.json()))
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return reject(err);
            })
    }))
}

