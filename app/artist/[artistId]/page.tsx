import ArtistAlbumsLoading from "@/components/artist/loading/artist-albums-loading"
import ArtistBannerLoading from "@/components/artist/loading/artist-banner-loading"
import ArtistTracksLoading from "@/components/artist/loading/artist-tracks-loading"
import dynamic from "next/dynamic"

const Page = ({ params }: { params: { artistId: string } }) => {
    return (
        <>
            <ArtistBannerSection artistId={params.artistId} />
            <ArtistTopTracksSection artistId={params.artistId} />
            <ArtistAlbumsSection artistId={params.artistId} />
            <RelatedArtistSection artistId={params.artistId} />
        </>
    )
}

const ArtistBannerSection = dynamic(() => import('../../../components/artist/artist-banner-section'),
{
  loading: ArtistBannerLoading
})

const ArtistTopTracksSection = dynamic(() => import('../../../components/artist/artist-top-tracks-section'),
{
  loading: ArtistTracksLoading
})

const ArtistAlbumsSection = dynamic(() => import('../../../components/artist/artist-albums-section'),
{
  loading: ArtistAlbumsLoading
})

const RelatedArtistSection = dynamic(() => import('../../../components/artist/artist-related-section'),
{
  loading: ArtistAlbumsLoading
})

export default Page