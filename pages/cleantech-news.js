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

import { supabase } from '@/utils/supabaseClient'
import Newsfeed from '@/components/Newsfeed'

export default function CleantechNews({newsfeed, count}) {

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
           <Newsfeed data={newsfeed} count={count} />
        </AppShell>
    )

    
}


// export async function getServerSideProps() {

//     const sql = `
//     id,title, body, url, industry (text), created_at

//     `

//     // Fetch data from external API
//     let { data: newsfeed, count, error } = await
//               supabase.from('newsfeed')
//                   .select(sql, { count: "exact" })
                
//                   .order("created_at", { ascending: false })
//                   .range(0, 5)
  
//     // Pass data to the page via props
//     return { props: { newsfeed, count } }
//   }

export async function getStaticProps() {
        const sql = `
    id,title, body, url, industry (text), created_at

    `

    // Fetch data from external API
    let { data: newsfeed, count, error } = await
              supabase.from('newsfeed')
                  .select(sql, { count: "exact" })
                
                  .order("created_at", { ascending: false })
                  .range(0, 5)
  
    // Pass data to the page via props
    return { props: { newsfeed, count }, revalidate: 1000 }
}