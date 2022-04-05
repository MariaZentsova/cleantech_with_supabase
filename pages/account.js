import AppShell from '@/components/AppShell'
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
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'

const Account = ({ session }) => {
    const [loading, setLoading] = useState(true)
    const [userName, setUserName] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const { toast } = useToast()

    //get user data from supabase
    async function getProfile() {
        try {
            setLoading(true)
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from('profiles')
                .select('username, website, avatar_url')
                .eq('id', user.id)

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUserName(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        }
        catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProfile();
    }, [session])


    async function updateProfile({username, website, avatar_url}) {
        try {
            setLoading(true)
            const user = supabase.auth.user()
            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date()
            }

            let {error} = await supabase.from('profiles').upsert(updates, {returning: 'minimal'} )
            
            if (error) throw error
        }
        catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AppShell>
            Account
        </AppShell>
    )
}

export default Account