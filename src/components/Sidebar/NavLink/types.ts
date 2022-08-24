import { ElementType } from 'react';
import { LinkProps as ChakraLinkProps } from '@chakra-ui/react'

export interface NavLinkProps extends ChakraLinkProps {
  title: string;
  icon: ElementType;
  href: string;
}