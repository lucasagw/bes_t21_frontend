import React from "react";
// Components
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const NavHeader = () => {
  return (
    <Navbar className="bg-primary text-white">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">BES T21</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default NavHeader;
