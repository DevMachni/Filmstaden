import React from "react";
import "./footer.styles.css";

import FooterItem from "../footer-item/footer-item.component";

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
          <div className="footer-headlines">
            <div>Gäster</div>
            <div>Medlemmar</div>
            <div>Företag</div>
            <div>Personupgifter</div>
          </div>
          <div className="link-container">
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
              <FooterItem key={id} {...otherSectionProps} />
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
