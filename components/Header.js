import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    useBreakpointValue,
    useDisclosure,
    IconButton,
    Link,
    Heading
} from '@chakra-ui/react'
import NavLink from './NavLink'
import NextLink from 'next/link'
import { MdArrowForward } from "react-icons/md"
import Image from 'next/image'

const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <Box
            as="header"
            top="0"
            zIndex="4"

            left="0"
            right="0"
            borderBottomWidth="1px"
            width="full"
            height="4rem">
            <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
                <Flex size="100%" p={[0, 3]} pl={[0, 4]} align="center" justify="space-between">
                    <Box as="a" d="block" href="/" aria-label="daydrink, Back to homepage">
                        <HStack>
                            <Image src="/Sustinero.svg" alt="Sustinero Logo" width={35} height={35} />
                            <Heading fontSize={'md'}>
                                SUSTINERO
                            </Heading>
                        </HStack>
                    </Box>

                    <HStack fontWeight={'extrabold'} spacing={20}>
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
                    </HStack>
                    <Flex align="center" >
                        <NextLink href='/register'>
                        <Button rightIcon={<MdArrowForward />} colorScheme={'black'} variant='outline'>
                            Get Access
                        </Button>
                        </NextLink>
                        {/* {!hideSearch && <MobileNav />} */}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default Header