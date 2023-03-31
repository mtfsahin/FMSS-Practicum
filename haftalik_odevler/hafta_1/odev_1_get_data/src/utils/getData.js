import axios from "axios";

//kullanıcıdan alınan id parametresi ile daha fonksiyonel hale getirdim
async function getUserData(id) {
    try {
        //Axios get isteği ile veriler çekilir, ayrı arı iki await yerine tek await kullanarak
        //hızlı olmasını sağladım
        const [userResponse, postsResponse] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        ]);
        //user datalarını userDataya, postlarını da userPost a atadım
        const userData = userResponse.data;
        const postsData = postsResponse.data;

        //iki ayrı veriyi birleltirdim
        const mergedData = { ...userData, posts: postsData };

        //Son olarak birleşen veriyi döndürdüm
        return mergedData;
    } catch (error) {
        //olası hata durumlarını yakalamak için try catch kullandım
        console.error("getData fonksiyonunda bir hata gerçekleşti.", error);
        return null;
    }
}

export default getUserData;
