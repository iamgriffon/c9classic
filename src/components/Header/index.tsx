import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';

export function Header() {

  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >

      {!isWideVersion && (
        <IconButton
          aria-label='Open Navigantion'
          mr='2'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen} />
      )}

      <Logo />
      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
};