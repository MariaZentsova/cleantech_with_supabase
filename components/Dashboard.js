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
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import RoundsTable from "@/components/Table"
import PieChart from '@/components/PieChart';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Card from "@/components/Card"
import BarChart from './BarChart';

const Dashboard = () => {
    return (
        <>
        <Breadcrumb mb={3}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>CleanTech Start Ups Funding</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        <Grid
            h='700px'
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={3} colSpan={2}
            // bg='tomato' 
            >
                <Card height={'100%'}>
                    <ParentSize>
                        {({ width, height }) =>

                            <PieChart width={width} height={height} />
                        }
                    </ParentSize>
                </Card>
            </GridItem>
            <GridItem colSpan={1} bg='papayawhip'>
                <Card height={'100%'}>
                    <Stat p={2}>
                        <StatLabel>Total Deals</StatLabel>
                        <StatNumber>25</StatNumber>
                        <StatHelpText>Jan 1 - Feb 25, 2022</StatHelpText>
                    </Stat>
                </Card>
            </GridItem>
            <GridItem colSpan={1} bg='papayawhip'>
                <Card height={'100%'}>
                    <Stat p={2}>
                        <StatLabel>Average Round</StatLabel>
                        <StatNumber>$500,000</StatNumber>
                        <StatHelpText>Jan 1 - Feb 25, 2022</StatHelpText>
                    </Stat>
                </Card>
            </GridItem>
            <GridItem colSpan={1} bg='papayawhip'>
                <Card height={'100%'}>
                    <Stat p={2}>
                        <StatLabel>Last Update</StatLabel>
                        <StatNumber>Today</StatNumber>
                        <StatHelpText>last scraping day</StatHelpText>
                    </Stat>
                </Card>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3} bg='tomato'>
                <Card height={'100%'}>
                <ParentSize>
                        {({ width, height }) =>

                            <BarChart width={width} height={height} />
                        }
                    </ParentSize>
                </Card>
            </GridItem>
            <GridItem rowSpan={3} colSpan={5} bg='papayawhip'>
                <RoundsTable />
            </GridItem>
        </Grid>
        </>
    )
}

export default Dashboard