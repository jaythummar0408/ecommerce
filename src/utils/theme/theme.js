import { createTheme } from "@mui/material";


const primary = {
    light: '#3d8bfd',
    main: '#0D6EFD',
    dark: '#094db1',
    contrastText: '#fff',
}

const theme = createTheme({
    palette: {
        primary,
        red: {
            light: '#fb5c5c',
            main: '#FA3434',
            dark: '#af2424',
            contrastText: '#fff',
        },
        orange: {
            light: '#ffa645',
            main: '#FF9017',
            dark: '#b26410',
            contrastText: '#fff',
        },
        skin: {
            light: '#ffeacb',
            main: '#FFE5BF',
            dark: '#b2a085',
            contrastText: '#000',
        },
        teaGreen: {
            light: '#cfffd5',
            main: '#C3FFCB',
            dark: '#88b28e',
            contrastText: '#000',
        },
        skyBlue: {
            light: '#e8f3ff',
            main: '#E3F0FF',
            dark: '#9ea8b2',
            contrastText: '#000',
        },

    },
    typography: {
        root: {
            fontfamily: '"Inter"',
            fontWeight: 600,

        },
        h1: {
            fontSize: "48px",
            letterSpacing: "-1.6px"
        },
        h2: {
            fontSize: "32px",
            letterSpacing: "-0.2px"
        },
        h3: {
            fontSize: "24px",
            letterSpacing: "-0.2px"
        },
        h4: {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.2px"
        },
        h5: {
            fontSize: "18px",
        },
        h6: {
            fontSize: "16px"
        },
        body: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "-0.2px"
        },
        bodySmall: {
            fontSize: "14px",
            fontWeight: 400,
        },
        bodyMicro: {
            fontSize: "12px",
            fontWeight: 400
        }

    },
    components: {
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             fontWeight: "700",
        //             fontSize: "15px",
        //             fontFamily: "Inter",
        //             color: "#fff"
        //         },
        //         contained: {
        //             textAlign: "center",
        //             fontWeight: 500,
        //             background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
        //             borderRadius: "7px"
        //         },
        //         outlined: {
        //             border: "1px solid #DEE2E7",
        //             color: primary.main
        //         }

        //     }
        // },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    '&:hover': {
                        backgroundColor: '#E5F1FF',
                        color: '#1c1c1c',
                    },
                },
                active: {
                    backgroundColor: '#E5F1FF',
                    color: '#1c1c1c',
                },
            },
        },
        MuiPagination:{
            styleOverrides:{
                root:{
                    borderRadius:"6px"
                }
            }
        },
        MuiPaginationItem:{
            styleOverrides:{
                root:{
                    borderRadius:"6px",

                }
            }
        }




    }


});

export default theme;