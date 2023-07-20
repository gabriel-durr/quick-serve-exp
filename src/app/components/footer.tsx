'use client'

import { Flex, Text, FlexProps, HStack, ButtonGroup, IconButton } from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export const Footer = ({ ...props }: FlexProps) => {
  return (
    <Flex
      as="footer"
      pos="relative"
      bottom={0}
      w="full"
      h="100px"
      align="center"
      justify="center"
      p={6}
      pl={48}
      bg="blackAlpha.100"
      {...props}
    >
      <HStack spacing={48} justify="space-between">
        <Text fontSize="xs">Copyright QUICK SERVE EXP © 2023. Todos os direitos reservados.</Text>
        <ButtonGroup variant="unstyled">
          <IconButton aria-label="QUICK SERVE EXP Instagram">
            <Icons.Instagram />
          </IconButton>

          <IconButton aria-label="QUICK SERVE EXP Instagram">
            <Icons.linkedin />
          </IconButton>
        </ButtonGroup>
      </HStack>
    </Flex>
  )
}
