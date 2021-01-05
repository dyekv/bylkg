export interface BlogData{
    id:number,
    title:string,
    publishedAt:string,
    body:JSX.Element,
    image:{url:string} | undefined,
    date:string | undefined,
}