import { Link as ChakraLink, Text, Icon } from '@chakra-ui/react';
import { ActiveLink } from '../../ActiveLink';
import { NavLinkProps } from './types';

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {

  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' align='center' color='pink.400' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium' color='gray.400' fontSize='medium'>{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}