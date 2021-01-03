import { FunctionComponent } from "react";
import { Contact } from "./contact";
import { ContactForm } from "./contact-form";

type ContactComposerProps = {
  element: Contentful.IContact;
};

const ContactComposer: FunctionComponent<ContactComposerProps> = ({
  element,
}) => {
  return (
    <Contact tagline={element.fields.tagline} contactForm={<ContactForm />} />
  );
};

export { ContactComposer };
