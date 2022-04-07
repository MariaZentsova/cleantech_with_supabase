import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import Table from "@/components/Table"
import AppShell from "@/components/AppShell";
//import { basePath } from "@/utils/siteConfig";

const CleanTechFunding = () => {

    return (
        <AppShell width="full" maxWidth="1280px" mx="auto" px={6} py={6}l>
                <Breadcrumb fontWeight={'bold'} mb={3}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Clean Tech Start Ups Funding</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
    
        </AppShell>
    )
}

// export async function getServerSideProps() {
//     // We need to implement `/api/getUser` by creating 
//     // an endpoint in `pages/api` but for now let's just call it
//   const response = await fetch(`${basePath}/api/getUser`).then((response) =>
//     response.json()
//   );

//   const { user } = response;

//  // If the `getUser` endpoint doesn't have a user in its response
//  // then we will redirect to the login page
//  // which means this page will only be viewable when `getUser` returns a user.

//   if (!user) {
//     return {
//       redirect: { destination: "/register", permanent: false },
//     };
//   }
//   // We'll pass the returned `user` to the page's React Component as a prop
//   return { props: { user } };
// }

export default CleanTechFunding
