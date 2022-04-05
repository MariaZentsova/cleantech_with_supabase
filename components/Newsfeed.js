import NewsCard from "@/components/NewsCard"
import TagsCloud from '@/components/TagsCloud'
import {
    Grid,
    GridItem, Container, Text, Heading, Stack, useBreakpointValue,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator
} from '@chakra-ui/react'

const NewsFeed = ({ news }) => {
    return (
        <>
            <TagsCloud />
            <Stack pt={2} spacing="2">
                {news.map((post, index) => {
                    return (
                        <NewsCard key={index} post={post} />
                    )
                })}
            </Stack>
        </>
    )
}

export default NewsFeed