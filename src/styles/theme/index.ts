import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { colors, fonts } from "./foundations";

const overrides = { styles, colors, fonts };

const theme = extendTheme(overrides);

export { theme };
