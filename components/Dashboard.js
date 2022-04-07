import {
    Grid,
    GridItem, 
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack
} from '@chakra-ui/react'
import RoundsTable from "@/components/Table"
import PieChart from '@/components/PieChart';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Card from "@/components/Card"
import BarChart from './BarChart';

const Dashboard = ({ funding, count, investment }) => {


    return (
        <>
            <Breadcrumb fontWeight={'bold'} mb={3}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Clean Tech Start Ups Funding</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>


            <Grid
                bg='gray.100'
                h='100vh'
                templateRows='repeat(6, 1fr)'
                // templateColumns='repeat(5, 1fr)'
                //   templateColumns = {{sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
                templateColumns={{ sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
                gap={4}


            //to make the grid responsive
            >
                <GridItem minH='300px' rowSpan={{ sm: 3, md: 3 }} colSpan={{ sm: 5, md: 2, lg: 2, '2xl': 2 }}>
                    <Card height={'100%'}>
                        <Text p={2} > Clean Tech Investments, mln $</Text>
                        <ParentSize>
                            {({ width, height }) =>

                                <PieChart investment={investment} width={width} height={height} />
                            }
                        </ParentSize>
                    </Card>
                </GridItem>
                <GridItem colSpan={{ sm: 5, md: 3, lg: 3, xl: 3, '2xl': 3 }} >
                    <HStack justify='space-between'>
                        <Card height={'100%'}>
                            <Stat p={2}>
                                <StatLabel>Total Deals</StatLabel>
                                <StatNumber>{count}</StatNumber>
                                <StatHelpText>Jan 1 - Feb 25, 2022</StatHelpText>
                            </Stat>
                        </Card>
                        <Card height={'100%'}>
                            <Stat p={2}>
                                <StatLabel>Average Round</StatLabel>
                                <StatNumber>$500,000</StatNumber>
                                <StatHelpText>Jan 1 - Feb 25, 2022</StatHelpText>
                            </Stat>
                        </Card>
                        <Card height={'100%'}>
                            <Stat p={2}>
                                <StatLabel>Average Round</StatLabel>
                                <StatNumber>$500,000</StatNumber>
                                <StatHelpText>Jan 1 - Feb 25, 2022</StatHelpText>
                            </Stat>
                        </Card>


                    </HStack>
                </GridItem>
                <GridItem rowSpan={2} colSpan={{ sm: 5, md: 3, lg: 3 }} >
                    <Card height={'100%'}>
                        <Text p={2} > Investments by Country, mln $</Text>
                        <ParentSize>
                            {({ width, height }) =>

                                <BarChart investment={investment} width={width} height={height} />
                            }
                        </ParentSize>
                    </Card>
                </GridItem>
                <GridItem mt={3} rowSpan={3} colSpan={{ sm: 5, md: 5, lg: 5 }}>

                    <RoundsTable funding={funding} />

                </GridItem>
            </Grid>
        </>
    )
}

export default Dashboard