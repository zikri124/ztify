import ArtistBannerLoading from "@/components/artist/loading/artist-banner-loading"
import ArtistTracksLoading from "@/components/artist/loading/artist-tracks-loading"
import dynamic from "next/dynamic"

const PageView = dynamic(() => import('../../../components/playlist/view'),
{
    loading: () => <><ArtistBannerLoading /><ArtistTracksLoading/></>
})

const Page = async ({ params }: { params: { playlistId: string } }) => {
    return (
        <>
            <PageView playlistId={params.playlistId} />
        </>
    )
}

export default Page
