import { Stack } from '@chakra-ui/react';
import { RiUser3Fill } from 'react-icons/ri';
import { GiClothes, GiChestArmor, GiRank3, GiSwordman } from 'react-icons/gi'
import { FaBookOpen, FaDiscord } from 'react-icons/fa'
import { NavLink } from '../NavLink/';
import { NavSection } from '../NavSection';

export function SidebarNav() {
  return (
    <Stack spacing={['6', '8']} align='flex-start'>
      <NavSection title='general'>
        <NavLink title='Characters' href='/characters' icon={GiSwordman} />
        <NavLink title='Costume Shop' href='/costumes' icon={GiClothes} />
        <NavLink title='Item Store' href='/store' icon={GiChestArmor} />
        <NavLink title='Rank Ladder' href='/rank' icon={GiRank3} />
      </NavSection>
      <NavSection title='Account & Community'>
        <NavLink title='Account' href='/account' icon={RiUser3Fill} />
        <NavLink title='Guides' href='/guides' icon={FaBookOpen} />
        <NavLink title='Discord' href='https://discord.gg/HJz8fCu' icon={FaDiscord} />
      </NavSection>
    </Stack>
  )
}