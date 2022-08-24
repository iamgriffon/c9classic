import { Box, Flex, Heading, Spinner, Text, Table, Tbody, Thead, Tr, useBreakpointValue, Icon, Checkbox, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { RiQuestionLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { PanelTableHead } from '../../components/Panel/TableHead';
import { PanelTableRow } from '../../components/Panel/TableRow';
import { SearchBox } from '../../components/Search/Box';
import { SearchBar } from '../../components/Search/Bar';
import { Sidebar } from '../../components/Sidebar';
import { CharacterProps, Characters } from '../../mock/characters';

export default function Dashboard() {
  const [data, setData] = useState<CharacterProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBoxes, setSelectedBoxes] = useState(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    setData(Characters)
  }, []);

  console.log('Renderizou')

  function handleSelectAllBoxes() {
    setSelectedBoxes(!selectedBoxes)
  };

  const fileretedCharacters = searchQuery.length > 0
    ? data.filter(char => char.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : data;

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' max-width={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex justifyContent='space-between'>
            <Heading size='lg' fontWeight='normal' mb='5'>
              Characters
              {!data.length && <Spinner size='sm' color='gray.500' ml='4' />}
            </Heading>
              <SearchBox>
                <SearchBar handleSearch={(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
              </SearchBox>
            <Text>You currently have <strong>4000</strong> Glenheim Points  <Icon ml='1' alignSelf='center' as={RiQuestionLine} /></Text>
          </Flex>


          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
              {/* <PanelTableHead innerHTML={<Checkbox value={1} isChecked={selectedBoxes} onChange={() => handleSelectAllBoxes()} colorScheme='pink' pb='1' />} /> */}
                <PanelTableHead innerHTML={'Character Name'} />
                <PanelTableHead innerHTML={'Class'} />
                {isWideVersion && <PanelTableHead innerHTML='PvP Records (Win / Lose / Draw)' />}
                {isWideVersion && <PanelTableHead innerHTML='Actions' />}
              </Tr>
            </Thead>
            <Tbody>
              {fileretedCharacters.map((item, index) => (
                <Tr key={index}>
                  <PanelTableRow
                    hasChecks={false}
                    first={item.name}
                    second={item.class}
                    third={item.pvpRecords.records()}
                    thirdLabel={item.pvpRecords.winRate()}
                    fourth={
                      <Button size='small' fontSize='1rem' colorScheme='purple' p='1.5'>
                        <Text mx='1'>Reset 2nd Password</Text>
                        <Icon as={FaLock} />
                      </Button>} 
                      isChecked={selectedBoxes}/>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

      </Flex>
    </Box>
  )
}