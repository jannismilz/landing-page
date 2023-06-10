import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <HStack>
            <Image src={logo} alt="logo" width={10} borderRadius={12} />
            <Button variant="ghost">Sweep AI</Button>
          </HStack>
          <ButtonGroup variant="link">
            <IconButton
              variant="ghost"
              icon={<FaTwitter />}
              aria-label="Twitter"
              onClick={() => {
                document.location.href = "https://twitter.com/sweep__ai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaGithub />}
              aria-label="Github"
              onClick={() => {
                document.location.href = "https://github.com/sweepai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaDiscord />}
              aria-label="Discord"
              onClick={() => {
                document.location.href = "https://discord.gg/j8XxQmpHEF";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaBook />}
              aria-label="Docs"
              onClick={() => {
                document.location.href = "https://sweep-ai.notion.site/Getting-started-with-Sweep-55f0155f610141139a15a9e448fd3ee2?pvs=4";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<EmailIcon />}
              aria-label="Email"
              onClick={() => {
                document.location.href = "mailto:team@sweep.dev";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<p>Buy Sweep Pro</p>}
              aria-label="Stripe"
              onClick={() => {
                document.location.href =
                  "https://buy.stripe.com/7sI1793ap5Xi3MQ001";
              }}
            />
          </ButtonGroup>
        </Flex>
      </HStack>
    </Box>
  );
}
