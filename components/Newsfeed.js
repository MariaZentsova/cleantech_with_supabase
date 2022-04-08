import NewsCard from "@/components/NewsCard"
import { useState } from "react"
import TagsCloud from '@/components/TagsCloud'
import { Stack } from '@chakra-ui/react'
import InfiniteScroll from "react-infinite-scroll-component"
import { supabase } from '@/utils/supabaseClient'

const NewsFeed = ({ data, count }) => {
    const [news, setNews] = useState(data)
    const [page, setPage] = useState(5)
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false)
    
    console.log(hasMore)

    const fetchNews = async () => {
        let { data: newsfeed, count, error } = await
            supabase.from('newsfeed')
                .select('*', { count: "exact" })
               // .filter("tag", "ilike", `%${tag}%`)
                .order("created_at", { ascending: false })
                .range(page +1, page + 5)

        if (error) {
            console.log('error', error)
        }
        else {
            // setNews([...new Set([...news, ...newsfeed])])
            setNews(prevNews => {
                return [...new Set([...prevNews, ...newsfeed])]
            })
            setHasMore(news.length < count)
            setLoading(false)
        }
    }

    return (
        <>
            {/* <TagsCloud /> */}

            <InfiniteScroll
                dataLength={count}
                next={fetchNews}
                hasMore={true}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            > <Stack pt={2} spacing="2">
                    {news.map((post, index) => (
                        <NewsCard key={index} post={post} />
                    ))} </Stack>
            </InfiniteScroll>

        </>
    )
}

export default NewsFeed