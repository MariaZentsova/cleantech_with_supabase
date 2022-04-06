import {Drawer, DrawerBody, IconButton, useDisclosure, DrawerOverlay, DrawerContent} from '@chakra-ui/react';
import {FiMenu } from 'react-icons/fi'
import SideNav from './SideNav';

const MobileNav = () => {
    const {isOpen, onToggle, onClose} = useDisclosure();
    return (
        <>
        <IconButton
            variant="ghost"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu"
            onClick={onToggle}
        />
        <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody p={0}>
                    <SideNav contentHeight="100vh" top="0"/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
    )
}

export default MobileNav