import Image from 'next/image'
import {
  Badge,
  Button,
  Card,
  Collection,
  Divider,
  Flex,
  Heading,
  View,
} from '@aws-amplify/ui-react'
const items = [
  {
    title: 'Milford - Room #1',
    badges: ['Waterfront', 'Verified'],
  },
  {
    title: 'Milford - Room #2',
    badges: ['Mountain', 'Verified'],
  },
]

const Featured: React.FC = () => {
  return (
    <Collection
      items={items}
      type="list"
      direction="row"
      gap="20px"
      wrap="nowrap"
    >
      {(item, index) => (
        <Card
          key={index}
          borderRadius="medium"
          maxWidth="20rem"
          variation="outlined"
        >
          <Image
            src="/road-to-milford-new-zealand-800w.jpg"
            alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
          />
          <View padding="xs">
            <Flex>
              {item.badges.map((badge) => (
                <Badge
                  key={badge}
                  backgroundColor={
                    badge === 'Waterfront'
                      ? 'blue.40'
                      : badge === 'Mountain'
                      ? 'green.40'
                      : 'yellow.40'
                  }
                >
                  {badge}
                </Badge>
              ))}
            </Flex>
            <Divider padding="xs" />
            <Heading padding="medium">{item.title}</Heading>
            <Button variation="primary" isFullWidth>
              Book it
            </Button>
          </View>
        </Card>
      )}
    </Collection>
  )
}

export default Featured
