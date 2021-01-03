import { FunctionComponent } from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type NavigationLinkProps = {
  title: string;
  path: string;
};

const NavigationLink: FunctionComponent<NavigationLinkProps> = ({
  title,
  path,
}) => {
  return (
    <NextLink href={path} passHref>
      <Link color="red.700">{title.toUpperCase()}</Link>
    </NextLink>
  );
};

export { NavigationLink };
