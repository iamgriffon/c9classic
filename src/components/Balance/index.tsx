import { Text, Icon } from '@chakra-ui/react'
import { RiQuestionLine } from 'react-icons/ri'

export function Balance(){
  return (
    <Text>You currently have <strong>4000</strong> Glenheim Points  <Icon ml='1' alignSelf='center' as={RiQuestionLine} /></Text>
  )
}