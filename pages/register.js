import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    toast,
    useBreakpointValue,
    useColorModeValue,
    useToast
} from '@chakra-ui/react'
import {useState} from 'react';
import PasswordField from '@/components/PasswordField';
import { supabase } from '@/utils/supabaseClient'

const Register = () => {

    const [loading, setLoading] = useState(false)
    const [username, setUsename] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast();

    const handleLogin = async email => {
        try{
            setLoading(true)
            const {error} = await supabase.auth.signIn({email})
            if (error) throw error;
           
            toast({
                title: 'Account created',
                position: 'top',
                description: 'Check your email for login instructions',
                status: 'success', 
                duration: 5000,
                isClosable: true

            })
            
        } catch (error) {
            console.log(error)
            toast({
                title: 'Error',
                position: 'top',
                description: error.error_description || error.error_message,
                status: 'error', 
                duration: 5000,
                isClosable: true

            }) 
        } finally {
            setEmail('')
            setLoading(false)
        }
    }
 
    return (

    <Container width='100%' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack maxW="lg" spacing="8">
            <Stack spacing="6">
                {/* <Logo /> */}
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
                  Get Access
                    </Heading>
                    <HStack spacing="1" justify="center">
                        <Text color="muted">We'll email you a magic link for data access. </Text>
                     
                    </HStack>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input value={email} onChange={e => setEmail(e.target.value)}  id="email" type="email" />
                        </FormControl>
                  
                    </Stack>
                
                    <Stack spacing="6">
                        <Button 
                          onClick={e => {
                            e.preventDefault();
                            handleLogin(email);
                          }}
                          isLoading={loading}
                          loadingText="Signing in ..."
                          colorScheme="teal"
                          variant="outline"
                          spinnerPlacement="start"
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500'
                          }}
                        >    {loading || 'Send magic link'}</Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>)
}

export default Register