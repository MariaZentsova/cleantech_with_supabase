import React from "react";
import { Box, Badge, Text, Flex, Stack, HStack, Heading, Tag, Code } from '@chakra-ui/react';
import { format, parseISO } from "date-fns";
import { Link } from "@chakra-ui/react"

function url_domain(url) {
    let domain = (new URL(url));

    return domain.hostname;
}


const NewsCard = () => {
    return (
        <Box
        bg="#fff"
        p="2"
        boxShadow={'sm'}
        position="relative"
        borderRadius="lg"
        maxW={'1000px'}
        // ref={ref}

    >
        <Flex>

            <Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
                <Flex align="center" justify="space-between">
                    
                    <Link
                    // href={post.url} 
                    href = '#'
                     isExternal _hover={{

                        textDecoration: 'underline',
                        textDecorationColor: "rgb(28, 255, 155)",
                        textDecorationWidth: "8px"

                    }}>
                        <Heading fontSize="xl" fontWeight="semibold" lineHeight="short">
                            Mexico will be building it's own wind turbines

                        </Heading> 
                    </Link>
                    {/* <Badge
                    // colorScheme={badgeColors[post.type.cleanup()]}
                    >
                        Agriculture
                        {post.type}
                    </Badge> */}
                    <Badge colorScheme='purple' size="sm">
                        Clean Energy
                    </Badge>

                </Flex>
                <Flex align="center" justify="space-between">
                    <Box>
                        <Text fontSize={'sm'}>
                            These wind turbines will be very big indeed
                        </Text>
                    </Box>
                    {/* <Badge variantColor="grey">30th October 2021</Badge> */}
                </Flex>
                <Flex align="center" justify="space-between">


                    {/* <HStack>
                        {post.tags.map(tag => (
                            <Tag key={tag} colorScheme='gray'>
                                {tag}
                            </Tag>
                        ))}
                    </HStack> */}
                    <Text as="em" color="gray.400" fontSize={"sm"}>

                        {/* {format(parseISO(post.created_at), 'MMMM do, yyyy')} */}
                        3 March 2022
                    </Text>
                    <Text as="em" color="gray.400" fontSize={"sm"}>
                        {/* {url_domain(post.url)} */}
                      www.example.com
                    </Text>
                </Flex>
            </Stack>
        </Flex>
    </Box>
    )
}

export default NewsCard