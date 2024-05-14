import { useState } from "react";
import { Container, Box, VStack, Input, Button, Text, FormControl, FormLabel, Heading, Link, useToast } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toast = useToast();

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Logged in successfully!" : "Registered successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" width="100%">
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading>{isLogin ? "Log In" : "Register"}</Heading>
          {!isLogin && (
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Enter your username" />
            </FormControl>
          )}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            {isLogin ? "Log In" : "Register"}
          </Button>
          <Text>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Link color="teal.500" onClick={handleToggle}>
              {isLogin ? "Register" : "Log In"}
            </Link>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
