import { MantineProvider } from "@mantine/core";

//Router
import Router from "./router";

//theme
import theme from "./theme/theme";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;
