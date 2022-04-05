import {Box} from "@chakra-ui/react"

const Logo = (props) => {
   
   const {children} = props
    return (
        <Box
            as="svg"
            mt={1}
            viewBox="0 0 492 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
           {children}
           </Box>
    );
};

export default Logo;