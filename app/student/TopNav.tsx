import { Navbar, Text } from "@nextui-org/react";

const TopNav = () => {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text h3 color="inherit">
          Dashboard
        </Text>
      </Navbar.Brand>
    </Navbar>
  );
};

export default TopNav;
