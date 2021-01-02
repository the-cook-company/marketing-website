import { FunctionComponent } from "react";
import { Address } from "./address";
import { AddressPhysical } from "./address-physical";

type AddressComposerProps = {
  element: Contentful.IAddress;
};
const AddressComposer: FunctionComponent<AddressComposerProps> = ({
  element,
}) => {
  return (
    <Address
      name={element.fields.name}
      email={element.fields.email}
      phone={element.fields.phone}
      mailing={element.fields.mailing}
      physical={
        <AddressPhysical
          latitude={element.fields.physical.lat}
          longitude={element.fields.physical.lon}
        />
      }
    />
  );
};

export { AddressComposer };
