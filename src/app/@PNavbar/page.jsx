"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {useEffect, useState} from 'react';

function Page() {
  const pathname = usePathname();
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    const url = pathname;
    setPageName(url);
    console.log("This is the page name 2nd method =", url);
  }, [pathname]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ghouse Mohammed Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              href="/Home"
              className={`${
                pageName === "/Home"
                  ? "bg-green-900 rounded-md px-4 py-2 text-sm font-medium text-white"
                  : "rounded-md px-4 py-2 text-sm font-medium text-blue"
              }`}
            >
              Home
            </Link>

            <Link
              href="/GhouseCVpdf"
              className={`${
                pageName === "/GhouseCVpdf"
                  ? "bg-green-900 rounded-md px-4 py-2 text-sm font-medium text-white"
                  : "rounded-md px-4 py-2 text-sm font-medium text-blue"
              }`}
            >
              CV
            </Link>

            <Link
              href="/SpeechToText"
              className={`${
                pageName === "/SpeechToText"
                  ? "bg-green-900 rounded-md px-4 py-2 text-sm font-medium text-white"
                  : "rounded-md px-4 py-2 text-sm font-medium text-blue"
              }`}
            >
              AI - SpeechToText
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Page;
