interface IParams {
    id: string
}

export default function Page({params} : { params: IParams}){ 
    if (!params.id) return "No id"
    return (
        <> blog id: {params.id}</>
    )
}