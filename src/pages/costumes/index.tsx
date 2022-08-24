import { Box, Container, Flex, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Balance } from '../../components/Balance';
import { CostumeCard } from '../../components/Shop/CostumeCard';
import { Header } from '../../components/Header';
import { SearchBox } from '../../components/Search/Box';
import { SearchBar } from '../../components/Search/Bar';
import { Sidebar } from '../../components/Sidebar';
import { Costumes, CostumeShopItem } from '../../mock/costumes';

export default function CostumeShop() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const [shop, setShop] = useState<CostumeShopItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { addToCart } = useCart();

  useEffect(() => {
    setShop(Costumes);
  }, [])

  function handleSearch(query: string) {
    setSearchQuery(query);
    console.log(query);
  }

  function handleClick (costume: CostumeShopItem){
    const cartItem = {
      id: costume.id,
      price: costume.price,
      name: costume.name,
      amount: 1
    };
    addToCart(cartItem);
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' max-width={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex justifyContent='space-between'>
            {isWideVersion &&
              <Heading size='lg' fontWeight='normal' mb='3' pr='5'>
                Costume Shop
              </Heading>}
            <SearchBox>
              <SearchBar handleSearch={event => handleSearch(event.target.value)} value={searchQuery} />
            </SearchBox>
            <Balance />
          </Flex>
          <Container maxW='80rem'>
            <SimpleGrid columns={[1, 3, 1, 4]}>
              {shop.filter(item => {
                if (searchQuery === '') return item;
                else if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) return item;
              }).map((costume, index) => {
                const { id, imageURL, C9Class, name, price } = costume;
                return (
                  <CostumeCard key={index} id={id} imageURL={imageURL} price={price} C9Class={C9Class} name={name} onClick={() => handleClick(costume)}  />
                )
              })}
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </Box>
  )
}

