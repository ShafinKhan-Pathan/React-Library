import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "../ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="highlight__container">
        <div className="highlight__row">
          <h2 className="span__modifier">Why Choose Us ?</h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Access your purchased books instantly and save valuable time."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Extensive Collection"
              para="With over 10,000 books, find titles across all your favorite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="dollar" />}
              title="Affordable Rates"
              para="Enjoy the best prices available across the United States."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
