import { useState } from 'react';
import { Text, Modal, Button, ModalBody, ModalFooter, ModalOverlay, ModalContent, SimpleGrid, Box } from '@chakra-ui/react';
// import { MdDiamond } from "react-icons/md";


export default function PricingModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        Pricing
      </Button>

      <Modal isOpen={show} onClose={handleClose} size="5xl">
        <ModalOverlay />
        <ModalContent p={8} backgroundColor="#0d1117" pb={4}>
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                height="100%"
              >
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    ⚡ Basic
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    Free
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ 5 GPT-4 Sweep tickets / month</li>
                    <li>✔ Unlimited GPT-3.5 sweep tickets</li>
                    <li>✔ Non-Commercial TOS</li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started", "_blank")}>
                  Install
                </Button>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    💎 Pro
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    $240 <span style={{ fontWeight: "normal" }}>/ month</span>
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ 120 GPT-4 sweep tickets / month</li>
                    <li>✔ Unlimited GPT-3.5 sweep tickets</li>
                    <li>✔ Priority support</li>
                    <li>✔ Commercial TOS</li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://buy.stripe.com/9AQ8zB26letOgzC5kp", "_blank")}>
                  Purchase
                </Button>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    🏢 Enterprise
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    Custom
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ Unlimited GPT-4 sweep tickets</li>
                    <li>✔ Enterprise support</li>
                    <li>✔ Fine-tuned retrieval model</li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://form.typeform.com/to/wliuvyWE", "_blank")}>
                  Contact us
                </Button>
              </Box>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter display="flex" alignItems="center" flexDirection="column">
            <Button variant="ghost" onClick={handleClose} mt={4}>
              ✕
            </Button>
          </ModalFooter>
        </ ModalContent>
      </Modal >
    </>
  );
}
