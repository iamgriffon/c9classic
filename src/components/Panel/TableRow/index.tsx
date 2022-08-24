import { Box, Checkbox, Link, Td, Text, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { PanelTableRowProps } from './type'; 


export function PanelTableRow({ first, firstLabel, second, secondLabel, third, thirdLabel, fourth, isChecked, hasChecks }: PanelTableRowProps) {
  const [checked, setChecked] = useState<boolean>();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  function handleCheck() {
    setChecked(!checked)
  };

  return (
    <>
      {hasChecks && <Td px='6'>
        <Checkbox colorScheme='pink' isChecked={checked} onChange={() => handleCheck()} />
      </Td>}
      <Td>
        <Box>
          <Link color='purple.400'>
            <Text as='p' fontWeight='bold' fontSize='mid'>{first}</Text>
          </Link>
          {firstLabel && (<Text fontSize='sm' color='gray.300' fontStyle='italic' fontWeight='bold'>{firstLabel}</Text>)}
        </Box>
      </Td>
      <Td fontWeight='bold'>{second}
        {secondLabel && (<Text fontSize='sm' color='gray.300' fontStyle='italic' fontWeight='bold'>{secondLabel}</Text>)}</Td>
      {isWideVersion && (<Td fontWeight='bold'>{third}
        {thirdLabel && (<Text fontSize='sm' color='gray.300' fontStyle='italic' fontWeight='bold'>{thirdLabel}</Text>)}</Td>)}
      {isWideVersion && (<Td fontWeight='bold'>{fourth}</Td>)}
    </>
  )
};