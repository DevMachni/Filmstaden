import React from "react";
import "./footer.styles.css";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

//Use this if you want to use footer-item component.
// import FooterItem from "../footer-item/footer-item.component";

export class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Kundservice",
          linkUrl: "Kundservice",
          id: 1,
        },
        {
          title: "Frågor och svar",
          linkUrl: "Kundservice/faq",
          id: 2,
        },
        {
          title: "Boka större grupper",
          linkUrl: "Kundservice",
          id: 3,
        },
        {
          title: "Mina Reservationer",
          linkUrl: "mina-reservationer",
          id: 4,
        },
        {
          title: "Lämna Feedback",
          linkUrl: "Feedback",
          id: 5,
        },
        {
          title: "Logga in",
          linkUrl: "logga-in",
          id: 6,
        },
        {
          title: "Bli Medlem",
          linkUrl: "logga-in",
          id: 7,
        },
        {
          title: "Om Medlemskapet",
          linkUrl: "om-medlemskapet",
          id: 8,
        },
        {
          title: "Medlemsnyheter",
          linkUrl: "medlemsnyheter",
          id: 9,
        },
        {
          title: "Frågor om medlemskapet",
          linkUrl: "medlem/faq",
          id: 10,
        },
        {
          title: "Om Filmstaden",
          linkUrl: "om-filmstaden",
          id: 11,
        },
        {
          title: "Press",
          linkUrl: "press",
          id: 12,
        },
        {
          title: "Jobb",
          linkUrl: "jobb",
          id: 13,
        },
        {
          title: "Filmstaden Business",
          linkUrl: "business",
          id: 14,
        },
        {
          title: "sociala medier",
          linkUrl: "sociala-medier",
          id: 15,
        },
        {
          title: "Personuppgiftspolicy",
          linkUrl: "personuppgiftspolicy",
          id: 16,
        },
        {
          title: "Dina rättigheter",
          linkUrl: "personuppgiftspolicy/dina-rättigheter",
          id: 17,
        },
        {
          title: "Cookiepolicy",
          linkUrl: "personuppgiftspolicy/länkningspolicy",
          id: 18,
        },
        {
          title: "Länkningspolicy",
          linkUrl: "personuppgiftspolicy/Personuppgiftspolicy",
          id: 19,
        },
        {
          title: "Filmstadens Medlemsvilkor",
          linkUrl: "medlem/medlemsvillkor",
          id: 20,
        },
      ],
    };
  }

  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-box">
            <Container>
              <Navbar
                className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3"
                light
              >
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse
                  className="d-sm-inline-flex flex-sm"
                  isOpen={!this.state.collapsed}
                  navbar
                >
                  <div className="flex-row">
                    <ul className="navbar-nav flex-grow flex-column">
                      <NavItem>
                        <h3 className="text-dark nav-link">Gäster</h3>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Kundservice"
                        >
                          Kundservice
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Kundservice/faq"
                        >
                          Frågor och svar
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Kundservice"
                        >
                          Boka större grupper
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/mina-reservationer"
                        >
                          Mina reservationer
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/feedback"
                        >
                          Lämna feedback
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
          <div className="footer-box">
            <Container>
              <Navbar
                className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3"
                light
              >
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse
                  className="d-sm-inline-flex flex-sm"
                  isOpen={!this.state.collapsed}
                  navbar
                >
                  <div className="flex-row">
                    <ul className="navbar-nav flex-grow flex-column">
                      <NavItem>
                        <h3 className="text-dark nav-link">Medlemmar</h3>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Logga in"
                        >
                          logga-in
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Logga in"
                        >
                          Bli Medlem
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/ om-medlemskapet"
                        >
                          Om medlemskapet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/medlem/medlemsnyheter"
                        >
                          Medlemsnyheter
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/medlem/faq"
                        >
                          Frågor om medlemskapet
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
          <div className="footer-box">
            <Container>
              <Navbar
                className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3"
                light
              >
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse
                  className="d-sm-inline-flex flex-sm"
                  isOpen={!this.state.collapsed}
                  navbar
                >
                  <div className="flex-row">
                    <ul className="navbar-nav flex-grow flex-column">
                      <NavItem>
                        <h3 className="text-dark nav-link">Företag</h3>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/om-filmstaden"
                        >
                          Om Filmstaden
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/Press">
                          Press
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/Jobb">
                          Jobb
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Business"
                        >
                          Filmstaden Business
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Sociala-Medier"
                        >
                          Sociala Medier
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
          <div className="footer-box">
            <Container>
              <Navbar
                className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3"
                light
              >
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse
                  className="d-sm-inline-flex flex-sm"
                  isOpen={!this.state.collapsed}
                  navbar
                >
                  <div className="flex-row">
                    <ul className="navbar-nav flex-grow flex-column">
                      <NavItem>
                        <h3 className="text-dark nav-link">Personupgifter</h3>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/personuppgiftspolicy"
                        >
                          Personuppgiftspolicy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/personuppgiftspolicy/dina-rättigheter"
                        >
                          Dina rättigheter
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/personuppgiftspolicy/cookiepolicy"
                        >
                          Cookiepolicy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/personuppgiftspolicy/länkningspolicy"
                        >
                          Länkningspolicy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/medlem/medlemsvillkor"
                        >
                          Filmstadens Medlemsvillkor
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
        </div>
      </footer>
    );
  }

  //   render() {
  //     return (
  //       <footer>
  //         <div className="footer-container">
  //           <div className="row">
  //             {this.state.sections.map(({ id, ...otherSectionProps }) => (
  //               <FooterItem key={id} {...otherSectionProps} />
  //             ))}
  //           </div>
  //         </div>
  //       </footer>
  //     );
  //   }
}
