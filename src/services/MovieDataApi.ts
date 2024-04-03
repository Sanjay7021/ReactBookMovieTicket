let url = "./movieData.json";
export async function getData(){
    const response = await fetch(url);
    const data = response.json();
    return data;
}
