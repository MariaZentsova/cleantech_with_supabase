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
    Link
} from '@chakra-ui/react'
import * as React from 'react'


const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <Box pos="fixed"
            as="header"
            top="0"
            zIndex="4"
            bg={'blue.50'}
            left="0"
            right="0"
            borderBottomWidth="1px"
            width="full"
            height="4rem">
            <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
                <Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
                    <Box as="a" d="block" href="/" aria-label="daydrink, Back to homepage">
                        SUSTINERO
                    </Box>

                    <ButtonGroup variant="ghost" spacing="1">

                
                        <Link href="/cleantech-news">
                            <Button aria-current="page">Clean Tech News</Button>
                        </Link>
                        <Link href="cleantech-startups">
                            <Button>Start Ups</Button>
                        </Link>
                        {/* <Link href="/cleantech-investors">
<Button>Investors</Button>
</Link> */}
                        <Link href="cleantech-dashboard">
                            <Button>Dashboard</Button>
                        </Link>
                    </ButtonGroup>
                    <Flex align="center" color="gray.500">

                        {/* {!hideSearch && <MobileNav />} */}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default Header