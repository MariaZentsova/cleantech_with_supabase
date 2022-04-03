import {
    Tag,
    Box,
    Flex,
    useCheckbox,
    useRadio,
    useRadioGroup,
    getRootProps,
    useCheckboxGroup
  } from "@chakra-ui/react";
  
  // 1. Create a component that consumes the `useRadio` hook
  function RadioCard(props) {
    
    const { getInputProps, getCheckboxProps } = useCheckbox(props);
    const {color} = props;
    const input = getInputProps();
    const checkbox = getCheckboxProps();
  
    return (
      <Box as="label" >
        <input {...input} />
        <Tag 
        bg="#aaa"
        opacity = {0.7}
        color = '#000'
        //colorScheme={'purple'}
        _hover={{ background: "blue.500", color: "white" }}
          {...checkbox}
          cursor="pointer"
          m={1}
          _checked={{
            bg: "blue.600",
            color: "white",
            borderColor: "blue.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
       
        >
          {props.children}
        </Tag>
      </Box>
    );
  }
  
  function TagCloud(props) {
   // const {job_tags} = props;

   const job_tags = [
    { type: 'Clean Energy', amount: 200, color: 'rgb(82, 246, 103)' },
    { type: 'Efficiency', amount: 123, color: 'rgb(35, 171, 216)' },
    { type: 'Mobility', amount: 20, color: 'rgb(110, 64, 170)' },
    { type: 'Agricultute & Food', amount: 400, color: 'rgb(29, 223, 163)' },
    { type: 'Air & Ecosystems', amount: 100, color: 'rgb(254, 75, 131)' },
]
  
  //   const { getRootProps, getRadioProps } = useRadioGroup({
  //     name: "framework",
  //     defaultValue: "Wind Power",
  //     onChange: console.log,
  //   });
  
    const { getRootProps, getCheckboxProps } = useCheckboxGroup({
      name: "framework",
      onChange: console.log,
    });
    
  
    //const group = getRootProps();
  
    return (
      <Box  mx="auto" >
        {job_tags.map((value) => {
          const radio = getCheckboxProps({ value });
          return (
            // <Tag size='lg' _hover={{ background: "blue.500", color: "white" }} mr={2} mt={2}>{value}</Tag>
            <RadioCard key={value.tag} {...radio.tag} color={value.color}>
                
              #{value.type}
             
            </RadioCard>
          );
        })}
      </Box>
    );
  }
  
  export default TagCloud;