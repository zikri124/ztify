'use client'

import { Input } from "@/components/ui/input"
import { useCallback, useEffect, useRef, useState } from "react"
import { SearchResult } from "../../types/search-result"
import fetchSearch from "@/utils/spotify/fetch-search"
import LoadingResult from "@/components/search/loading-result"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { ItemCardVariant2 } from "@/components/ui/spotify-item-card"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import AlbumsCarousel from "@/components/ui/carousels/albums-carousel"
import PlaylistsCarousel from "@/components/ui/carousels/playlists-carousel"
import ArtistsCarousel from "@/components/ui/carousels/artists-carousel"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { miliToMinSecString } from "@/utils/time-parser"
import SongResultSection from "@/components/search/song-result-section"

const Search = () => {
    const [query, setQuery] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const searchResult = useRef<SearchResult | null>(null)
    const searchInput = useRef<HTMLInputElement>(null)

    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const startSearch = async (q: string) => {
        setIsLoading(true)
        const result: SearchResult | null = await fetchSearch(q)
        if (result) {
            searchResult.current = result
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query !== "" && query !== undefined) {
                router.push(pathName + '?' + createQueryString('q', query))
                await startSearch(query!)
            } else if (searchParams.get("q") != null && query !== "") {
                let qSearchQuery: string = searchParams.get("q")!
                searchInput.current!.value = qSearchQuery
                await startSearch(qSearchQuery)
            } else if (query == "" && searchResult.current != null) {
                router.push(pathName)
                searchResult.current = null
            }
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [query])

    return (
        <main className="px-4 pt-4">
            <h1 className="text-4xl font-bold my-4">Search</h1>

            <div className="w-full">
                <Input type="text" ref={searchInput} onChange={e => setQuery(e.target.value)} placeholder="Search song, artist, playlist, and albums" className="w-full text-lg" />
            </div>

            <div className="mt-4">
                {isLoading && (
                    <LoadingResult />
                )}

                {(!isLoading && searchResult.current) && (
                    <div>
                        {(searchResult.current?.tracks.items.length > 0) && (
                            <SongResultSection tracksResult={searchResult.current!.tracks.items} />
                        )}

                        {(searchResult.current?.artists.items.length > 0) && (
                            <div className="py-2">
                                <h2 className="font-bold text-2xl mt-4 mb-4">Artists</h2>
                                <ArtistsCarousel artists={searchResult.current!.artists.items} />
                            </div>
                        )}

                        {(searchResult.current?.albums.items.length > 0) && (
                            <div className="py-2">
                                <h2 className="font-bold text-2xl mt-4 mb-4">Albums</h2>
                                <AlbumsCarousel data={searchResult.current!.albums.items} />
                            </div>
                        )}

                        {(searchResult.current?.playlists.items.length > 0) && (
                            <div className="py-2">
                                <h2 className="font-bold text-2xl mt-4 mb-4">Playlists</h2>
                                <PlaylistsCarousel data={searchResult.current!.playlists.items} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Search
