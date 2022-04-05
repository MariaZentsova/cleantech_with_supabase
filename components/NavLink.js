import {
    Link
} from '@chakra-ui/react'

const NavLink = ({ children}) => {
    return (
        <Link _hover={{
            textDecoration: 'underline',
            textDecorationColor: "rgb(28, 255, 155)",
            textDecorationThickness: "4px",
            textUnderlineOffset: 'var(--offset, 0.2em)',
           // transition: '--offset 400ms, text-decoration-color 400ms'
  
        }} 
    >
            {children}
        </Link>
    )
}

export default NavLink