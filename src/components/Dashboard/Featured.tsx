import Image from 'next/image'
import {
  Button,
  Card,
  Collection,
  Heading,
  View,
  Text,
} from '@aws-amplify/ui-react'
import { FeaturedExperiment } from 'src/interfaces/featureExperiment'

interface FeaturedProps {
  experiments: FeaturedExperiment[]
}

const Featured: React.FC<FeaturedProps> = ({ experiments }: FeaturedProps) => {
  return (
    <Collection
      items={experiments}
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
            width={100}
            height={100}
            src={item.primaryImage}
            alt="Featured Experiment Primary Image"
          />
          <View padding="xs">
            <Heading padding="medium">{item.name}</Heading>
            <Text>{item.description}</Text>
            <Button variation="primary" isFullWidth>
              CHeck It Out
            </Button>
          </View>
        </Card>
      )}
    </Collection>
  )
}

export default Featured
