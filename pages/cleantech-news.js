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
import AppShell from "@/components/AppShell"
import NewsCard from "@/components/NewsCard"
import TagsCloud from '@/components/TagsCloud'

export default function Home() {
    return (
        <AppShell width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
            <Breadcrumb fontWeight={'bold'} mb={3}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Clean Tech News</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <TagsCloud />
            <Stack pt={2} spacing="2">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </Stack>
        </AppShell>
    )
}
