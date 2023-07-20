'use client'

import { useRef, useState } from 'react'

import {
  RadioGroup,
  DrawerBody,
  SliderThumb,
  SliderTrack,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  DrawerCloseButton,
  SliderFilledTrack
} from '@chakra-ui/react'

import {
  Box,
  Text,
  Radio,
  Stack,
  Input,
  Drawer,
  Button,
  Slider,
  VStack,
  MenuItem,
  SliderMark
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export const Settings = () => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [value, setValue] = useState('1')
  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm'
  }

  return (
    <>
      <MenuItem
        ref={btnRef}
        py={2}
        rounded="md"
        gap={4}
        bg="blackAlpha.900"
        onClick={onOpen}
        _dark={{ bg: 'whiteAlpha.900' }}
        _hover={{ color: 'qse.rubi', transition: 'all .2s ease', filter: 'brightness(.9)' }}
      >
        <Icons.Settings color="qse.rubi" />
        Settings
      </MenuItem>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          bg="blackAlpha.800"
          color="gray.50"
          _dark={{ bg: 'whiteAlpha.800', color: 'gray.900' }}
        >
          <DrawerCloseButton />
          <DrawerHeader>Change your Settings</DrawerHeader>

          <DrawerBody display="flex" flexDir="column" gap={32} py={10} overflow="hidden">
            <Input
              variant="tcsaInput"
              w="full"
              rounded="md"
              py={4}
              bg="whiteAlpha.100"
              border="none"
              _dark={{ bg: 'gray.100' }}
              placeholder="Type here..."
            />

            <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                w={12}
                ml={-5}
                mt={-10}
                value={sliderValue}
                textAlign="center"
                rounded="sm"
                color="gray.900"
                bg="qse.offWhite"
                _dark={{ color: 'gray.50', bg: 'qse.black' }}
              >
                {sliderValue}%
              </SliderMark>
              <SliderTrack bg="red.100">
                <SliderFilledTrack bg="qse.rubi" />
              </SliderTrack>
              <SliderThumb shadow="sm" />
            </Slider>

            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row" w="full" spacing={4}>
                <Radio
                  value="1"
                  bg="qse.rubi"
                  colorScheme="blackAlpha"
                  _dark={{ colorScheme: 'whiteAlpha' }}
                >
                  Low
                </Radio>
                <Radio
                  value="2"
                  bg="qse.rubi"
                  colorScheme="blackAlpha"
                  _dark={{ colorScheme: 'whiteAlpha' }}
                >
                  Medium
                </Radio>
                <Radio
                  value="3"
                  bg="qse.rubi"
                  colorScheme="blackAlpha"
                  _dark={{ colorScheme: 'whiteAlpha' }}
                >
                  Fast
                </Radio>
              </Stack>
            </RadioGroup>

            <VStack
              p={8}
              pointerEvents="none"
              userSelect="none"
              justify="start"
              align="start"
              spacing={8}
              display="inline-flex"
              boxSize="full"
              bg="#FFF4CD"
              borderRadius={3}
              boxShadow="0px 10px 14px rgba(126, 50, 25, 0.15)"
              border="0.50px rgba(126, 50, 25, 0.16) solid"
            >
              <Box alignSelf="stretch" height={8} opacity={0.2} bg="#BE9400">
                <Text
                  alignSelf="stretch"
                  color="#252A31"
                  fontSize={16}
                  fontFamily="Circular Pro"
                  fontWeight="bold"
                  lineHeight={22.26}
                  wordBreak="break-word"
                >
                  Write your comment here.
                </Text>
              </Box>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              flex={1}
              mr={3}
              border="1px solid"
              borderColor="red"
              color="gray.50"
              _dark={{ color: 'gray.900' }}
              _hover={{ bg: 'blackAlpha.200' }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button variant="unstyled" color="qse.offWhite" bg="green" flex={2}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
