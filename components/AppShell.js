import { Box} from '@chakra-ui/react';
import Header from '@/components/Header'

const AppShell = ({children, ...rest}) => {
    return (
        <>
        <Header  />
        <Box>
           
            <Box pl={[0, null, null]} >
                <Box
                    as="section"
                    backgroundColor={ 'gray.100' }
                    minHeight="calc(100vh - 4rem)"
                >
                    <Box {...rest}>{children}</Box>
                </Box>
            </Box>
        </Box>
    </>
    )
}

export default AppShell 