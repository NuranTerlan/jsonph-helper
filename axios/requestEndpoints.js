// BASE_URL -> jsonplaceholder.typicode.com + /posts request endpoint for fetching data from api
export const getPostsRequest = "/posts";
export const getPostRequest = (id) => {
    return `${getPostsRequest}/${id}`;
};