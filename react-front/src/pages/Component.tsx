import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'

const Component = () => {
  return (
    <Box>
      <Center mt={24}>
        <Card>
          <CardHeader>
            <HStack>
              <Heading size="md">自己紹介</Heading>
              <Avatar name="miyakei" src="/miyakei.png" />
              <Text>【名前】ミヤケイ</Text>
              <Text>【職業】エンジニア</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs">出身地について</Heading>
                <Text pt="2" fontSize="sm">
                  青森県青森市は自然ゆたかな街です。蛇口からリンゴジュースが出ます。
                </Text>
              </Box>
              <Box>
                <Heading size="xs">趣味について</Heading>
                <Text pt="2" fontSize="sm">
                  最近はReact Nativeで旅人向けのアプリを開発するのが趣味です。
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  ひとこと
                </Heading>
                <Text pt="2" fontSize="sm">
                  一緒にランニングしましょう！
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  )
}

export default Component
