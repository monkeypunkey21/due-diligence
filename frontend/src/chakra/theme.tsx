import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        beige: {
            100: "#e8ded1",
        },
    },
    fonts: {
        body: "sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: 'beige.100',
            }
        }
    }
    
});

