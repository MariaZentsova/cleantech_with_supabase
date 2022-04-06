import { Box, Flex, VStack, Link } from "@chakra-ui/react"

import NavLink from './NavLink'
import NextLink from 'next/link'

const SideNav = (props) => {
    return (
        <Box

            position="fixed"
            left="0"
            width="100%"
            height="100%"
            top="0"
            right="0"
            {...props}
        >
            <Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px">
                <Box>
                    <Flex justify="space-between" direction="column" height="calc(100vh - 4rem)" fontSize="sm" p="6">
                        <VStack fontWeight={'extrabold'} spacing={10}>
                            <NextLink href='/cleantech-news' passHref>
                                <Link _hover={{
                                    textDecoration: 'underline',
                                    textDecorationColor: "rgb(28, 255, 155)",
                                    textDecorationThickness: "4px",
                                    textUnderlineOffset: 'var(--offset, 0.2em)',
                                    // transition: '--offset 400ms, text-decoration-color 400ms'

                                }}
                                >
                                    News
                                </Link>
                            </NextLink>
                            <NextLink href='cleantech-funding' passHref>
                                <NavLink>
                                    Funding
                                </NavLink>
                            </NextLink>
                            <NextLink href='https://app.loopedin.io/sustinero#/ideas' passHref>
                                <Link isExternal _hover={{
                                    textDecoration: 'underline',
                                    textDecorationColor: "rgb(28, 255, 155)",
                                    textDecorationThickness: "4px",
                                    textUnderlineOffset: 'var(--offset, 0.2em)',
                                    // transition: '--offset 400ms, text-decoration-color 400ms'

                                }}
                                >
                                    Submit a feedback
                                </Link>
                            </NextLink>
                        </VStack>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default SideNav