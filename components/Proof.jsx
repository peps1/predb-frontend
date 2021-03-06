import { Flex, IconButton, Image, Text } from "@chakra-ui/core";

const Proof = ({ proof }) => {
  if (!proof) return null;

  return (
    <Flex mt={5} align="center" direction="column">
      <Text>
        dolittle.2020.multi.complete.uhd.bluray-orca-proof.jpg
        <IconButton
          aria-label="Download proof file"
          icon="download"
          variant="ghost"
          variantColor="teal"
          ml={1}
        />
      </Text>
      <Image
        src="/dolittle.2020.multi.complete.uhd.bluray-orca-proof.jpg"
        alt=""
        m={4}
        objectFit="cover"
        maxHeight="400px"
        maxWidth={["100%", "100%", "650px"]}
      />
    </Flex>
  );
};

export default Proof;
