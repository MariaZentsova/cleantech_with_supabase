import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Tag,
    TableContainer,
    TableCaption,
    HStack,
    Link,
    Box,
    Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { format, parseISO } from "date-fns";
import { HiOutlineExternalLink } from 'react-icons/hi'
import NextLink from 'next/link'
import { MdArrowForward } from "react-icons/md"

function url_domain(url) {
    let domain = (new URL(url));

    return domain.hostname;
}

function return_mln(number) {
    let output = Math.floor(Math.abs(Number(number)) / 1.0e+4) / 100 + " mln"

    return output
}


const RoundsTable = ({ funding }) => {
    return (
        <TableContainer bg="white">
            <Table variant='simple'>
                <TableCaption>
                    <NextLink href='./cleantech-funding'>
                        <Link>  View all</Link>
                    </NextLink>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Startup</Th>
                        <Th>Round</Th>
                        <Th>Industry</Th>
                        <Th isNumeric>Value</Th>
                        <Th >location</Th>
                        <Th >Date</Th>
                        <Th>Source</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {funding && funding.map((round) => (
                        <Tr key={round.id}>
                            <Td>

                                <HStack spacing={3}>
                                    {/* <Avatar name={member.name} src={member.avatarUrl} boxSize="10" /> */}
                                    <Image
                                        src={round.startups.logo_url}
                                        width={40}
                                        height={40} />
                                    <Box>
                                        <Text>{round.startups.name}</Text>
                                    </Box>
                                </HStack>
                            </Td>
                            <Td>   <Tag colorScheme='green' size="sm">
                                {round.stage}
                            </Tag>
                            </Td>
                            <Td >{round.startups.industry.text}</Td>
                            <Td isNumeric>{return_mln(round.amount_usd)}</Td>
                            <Td >{round.startups.countries.name}</Td>
                            <Td>    {format(parseISO(round.date), 'MMMM, yyyy')}</Td>
                            <Td>
                                <HStack>
                                    <Link href={round.source.url} isExternal>
                                        <HiOutlineExternalLink />
                                    </Link>

                                </HStack>
                            </Td>
                        </Tr>
                    ))}


                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default RoundsTable