'use client'

import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { SearchResult } from "../../types/search-result"
import fetchSearch from "@/utils/spotify/fetch-search"
import LoadingResult from "@/components/search/loading-result"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { ArtistCardVariant2, ItemCardVariant2 } from "@/components/ui/spotify-item-card"

const Search = () => {
    const [query, setQuery] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<SearchResult>()

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query !== "" && query !== undefined) {
                setIsLoading(true)
                const result: SearchResult | null = await fetchSearch(query!)
                if (result) {
                    setSearchResult(result)
                    setIsLoading(false)
                }
            }
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [query])

    return (
        <main className="px-4 pt-4">
            <h1 className="text-2xl font-bold my-4">Search</h1>

            <div className="w-full">
                <Input type="text" onChange={e => setQuery(e.target.value)} placeholder="Search song, artist, playlist, and albums" className="w-full text-lg" />
            </div>

            <div className="mt-8">
                {isLoading && (
                    <LoadingResult />
                )}

                {(!isLoading && searchResult) && (
                    <div className="space-y-4">
                        {searchResult.tracks.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className={""} imageUrl={item.album.images[0].url} title={item.name} hrefLink={"#"} type={"Song"} artist={formatArtistsNameDisplay(item.artists)} />
                            </div>
                        ))}
                        {searchResult.artists.items.map((item, i) => (
                            <div key={i}>
                                <ArtistCardVariant2 className={""} imageUrl={item.images[0].url} hrefLink={"#"} artist={item.name} />
                            </div>
                        ))}
                        {searchResult.albums.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className={""} imageUrl={item.images[0].url} title={item.name} hrefLink={"#"} type={"Album"} artist={formatArtistsNameDisplay(item.artists)} />
                            </div>
                        ))}
                        {searchResult.playlists.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className={""} imageUrl={item.images[0].url} title={item.name} hrefLink={"#"} type={"Playlist"} artist={item.owner.display_name} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Search
