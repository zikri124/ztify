'use client'

import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { SearchResult } from "../types/search-result"
import fetchSearch from "@/utils/spotify/fetch-search"
import LoadingResult from "@/components/search/loading-result"
import Image from "next/image"
import formatArtistsNameDisplay from "@/components/format-artist-display-name"
import CardResult from "@/components/search/card-result"

const Search = () => {
    const [query, setQuery] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<SearchResult>()

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query !== "" && query !== undefined) {
                setIsLoading(true)
                const result: SearchResult | null = await fetchSearch(query!)
                console.log(result)
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
        <main>
            <h1 className="text-2xl font-bold my-4">Search</h1>

            <div className="w-full">
                <Input type="text" onChange={e => setQuery(e.target.value)} placeholder="Search" className="w-full text-lg" />
            </div>

            <div className="mt-8">
                {isLoading && (
                    <LoadingResult />
                )}

                {(!isLoading && searchResult) && (
                    <div className="space-y-4">
                        {searchResult.tracks.items.map((item, i) => (
                            <div key={i}>
                                <CardResult name={item.name} imageUrl={item.album.images[0].url} circleImg={false} url="/">
                                    <span>Song &#8226; {formatArtistsNameDisplay(item.artists)}</span>
                                </CardResult>
                            </div>
                        ))}
                        {searchResult.artists.items.map((item, i) => (
                            <div key={i}>
                                <CardResult name={item.name} imageUrl={item.images[0].url} circleImg={true} url="/">
                                    <span>Artist</span>
                                </CardResult>
                            </div>
                        ))}
                        {searchResult.albums.items.map((item, i) => (
                            <div key={i}>
                                <CardResult name={item.name} imageUrl={item.images[0].url} circleImg={false} url="/">
                                    <span>Album</span>
                                </CardResult>
                            </div>
                        ))}
                        {searchResult.playlists.items.map((item, i) => (
                            <div key={i}>
                                <CardResult name={item.name} imageUrl={item.images[0].url} circleImg={false} url="/">
                                    <span>Playlist</span>
                                </CardResult>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Search
