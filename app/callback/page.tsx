import { getSpotifyToken } from "../utils/spotify/spotify-token";
import Content from "./content";

type Props = {
    params: {};
    searchParams: { [key: string]: string | undefined };
};

const LoginCallback = async ({ params, searchParams }: Props) => {
    const data = await getSpotifyToken(searchParams.code, searchParams.state)

    return (
        <>
            <Content data={data} />
        </>
    )
}

export default LoginCallback
