import { Flex, Heading } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        height="-webkit-fill-available"
        maxHeight={200}
        minHeight={150}
        mt={16}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
    >
        <Heading size="3xl">{title}</Heading> {/* fontSize="6vw" */}
    </Flex>
)

Hero.defaultProps = {
    title: '0xAddress 🛠️',
}

export default Hero;