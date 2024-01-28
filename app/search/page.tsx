'use client'

import { Input } from "@/components/ui/input"
import { useCallback, useEffect, useRef, useState } from "react"
import { SearchResult } from "../../types/search-result"
import fetchSearch from "@/utils/spotify/fetch-search"
import LoadingResult from "@/components/search/loading-result"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { ArtistCardVariant2, ItemCardVariant2 } from "@/components/ui/spotify-item-card"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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
                <Input type="text" ref={searchInput} onChange={e => setQuery(e.target.value)} placeholder="Search song, artist, playlist, and albums" className="w-full text-lg" />
            </div>

            <div className="mt-8">
                {isLoading && (
                    <LoadingResult />
                )}

                {(!isLoading && searchResult.current) && (
                    <div className="space-y-4">
                        {searchResult.current!.tracks.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className={""} imageUrl={item.album.images[0].url} title={item.name} hrefLink={"#"} type={"Song"} artist={formatArtistsNameDisplay(item.artists)} />
                            </div>
                        ))}
                        {searchResult.current!.artists.items.map((item, i) => (
                            <div key={i}>
                                <ArtistCardVariant2 className={""} imageUrl={item.images[0].url} hrefLink={`/artist/${item.id}`} artist={item.name} />
                            </div>
                        ))}
                        {searchResult.current!.albums.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className={""} imageUrl={item.images[0].url} title={item.name} hrefLink={"#"} type={"Album"} artist={formatArtistsNameDisplay(item.artists)} />
                            </div>
                        ))}
                        {searchResult.current!.playlists.items.map((item, i) => (
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
