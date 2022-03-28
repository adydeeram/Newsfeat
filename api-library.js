class HttpRequest{
    async getData(url){

        const getUrl = await fetch(url)

        const getData = await getUrl.json();

        return getData

    }
}