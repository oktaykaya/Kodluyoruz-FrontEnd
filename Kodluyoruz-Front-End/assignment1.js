
/*
async function getComments(number){

    return new Promise(async(resolve, reject) => {

        const {data: users} = await (axios(`https://jsonplaceholder.typicode.com/users/${number}`))
        const {data: post} = await (axios(`https://jsonplaceholder.typicode.com/posts?userId/${number}`))
        resolve({users, post})
        reject("bir sorun oluştu")
    })
}

try {
    const users =await getComments(1);
console.log(users);
console.log(post);
} catch (error) {
    console.log(e);
}   

export default getComments(1); 
*/

import axios from "axios";
const getComments = async(number) =>{
    return new Promise(async(resolve, reject) =>{

        const {data : users} = await(axios("https://jsonplaceholder.typicode.com/users/" + number));
        const {data : post} = await(axios("https://jsonplaceholder.typicode.com/posts/" + number));
    
        resolve([users, post]);

        reject("bir sorun oluştu")
    })
}
    await getComments(1).then((data) => console.log(data)).catch((e) => console.log(e));

    export default getComments(1);