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
    HStack,
    Link,
    Box,
    Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { format, parseISO } from "date-fns";
import {HiOutlineExternalLink} from 'react-icons/hi'

function url_domain(url) {
    let domain = (new URL(url));

    return domain.hostname;
}


const RoundsTable = ({ funding }) => {
    return (
        <TableContainer bg="white">
            <Table variant='simple'>
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
                    {funding.map((round) => (
                        <Tr>
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
                            <Td isNumeric>{round.amount_usd}</Td>
                            <Td >{round.startups.countries.name}</Td>
                            <Td>    {format(parseISO(round.date), 'MMMM, yyyy')}</Td>
                            <Td> 
                                <HStack>
                                <Link href={round.source.url} isExternal>
                                 {url_domain(round.source.url)}
                                 </Link>
                                 <HiOutlineExternalLink />
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