import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { primary, secondary } from "./colors";

const customConfig = defineConfig({
  preflight: {
    scope: ".chakra-reset",
  },
  theme: {
    tokens: {
      colors: { primary, secondary },
      fonts: {
        heading: { value: "var(--font-outfit)" },
        body: { value: "var(--font-outfit)" },
      },
    },
    semanticTokens: {
      colors: {
        default: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.100}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          hover: { value: "{colors.primary.400}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        primary: {
          solid: { value: "{colors.primary.700}" },
          contrast: { value: "{colors.primary.100}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          hover: { value: "{colors.primary.400}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.700}" },
          contrast: { value: "{colors.secondary.100}" },
          fg: { value: "{colors.secondary.700}" },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.200}" },
          emphasized: { value: "{colors.secondary.300}" },
          hover: { value: "{colors.primary.400}" },
          focusRing: { value: "{colors.secondary.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
