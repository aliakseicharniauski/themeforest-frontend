import PathURL from "./routes"

export type Link = {
    label: string
    path: PathURL
    links?: Link[]
}

export type Links = Array<Link>