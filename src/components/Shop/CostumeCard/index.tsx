import { Box, Image, Text, Button, Stack } from '@chakra-ui/react';


export function CostumeCard<CostumeCardProps, ClickHandler>({imageURL, id, C9Class, price, name, onClick}){
  const product = 'Costume Name Here';
  const summary = 'Item ID here';
  const longLine = 'Price here'

  return (
    <Box
      p={4}
      display={{ md: 'flex' }}
      maxWidth='32rem'
      borderWidth={1}
      margin={2}
    >

      <Image
        boxSize='150px'
        margin='auto'
        src={imageURL}
        alt='A very beautiful costume item'
        ignoreFallback />

      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight='bold'
          textTransform='capitalize'
          fontSize='md'
          letterSpacing='wide'
          color='teal.600'
        >
          {name}
        </Text>
        <Text
          my={1}
          display='block'
          fontSize='xs'
          lineHeight='normal'
          fontWeight='semibold'
          cursor='pointer'
        >
          Class: {C9Class}
        </Text>
        <Text my={2} color='gray.500'  fontSize='xs'>
          <strong>{price}</strong> Glenheim Tokens
        </Text>
        <Button maxWidth='100px' background='pink.400' _hover={{ background: 'green.400' }} my={2} onClick={onClick} >
          Add to Cart
        </Button>
      </Stack>
    </Box>
  )
}

