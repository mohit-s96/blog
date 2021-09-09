import "../styles/index.css";
import { Solid } from "../src/components/svg/collection.svg";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
      <Story />
    </div>
  ),
];
