import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex aling="center">
            <Box mr="4" textAlign="right">
                <Text>Eduardo Caetano</Text>
                <Text color="gray.300" fontiSize="small">caetasousa@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Eduardo Caetano" src="https://github.com/caetasousa.png"/>
        </Flex>
    );
}