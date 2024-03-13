import { Theme, createTheme } from "@mui/material"

import CssBaselineOverrides from "./cssBaselineOverrides"
import { lightPalette } from "../palettes"
import variantsGenerator from "./typographyVariantsGenerator"

/**
 * Place all theme related properties here (except for palette)
 * @param {boolean} dark is used to switch theme
 * Since designs currently have only one theme, don't provide dark argument
 */

const create = (dark?: boolean): Theme => {
  // const palette = lightPalette;
  const theme = createTheme({
    palette: lightPalette,
    direction: "ltr",
    typography: {
      fontFamily: `Roboto, sans-serif`,
      h1: {
        fontSize: 32,
        fontWeight: 700
      }
    },
    components: {
      MuiCssBaseline: CssBaselineOverrides,
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.06)",
            [`&.MuiPopover-paper`]: {
              marginTop: 8,
              paddingRight: 8,
              paddingLeft: 8,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)"
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: "8px !important"
          }
        }
      },
      MuiSwitch: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true,
          disableTouchRipple: true
        },
        styleOverrides: {
          root: {
            padding: 2,
            overflow: "initial",
            width: 40,
            height: 25,
            [`& .MuiSwitch-track`]: {
              borderRadius: 20
            },
            [`& .MuiSwitch-switchBase`]: {
              padding: 0,
              top: 2.5,
              boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)"
            }
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true
        },
        styleOverrides: {
          root: {
            borderRadius: "8px",
            [`.MuiOutlinedInput-root`]: {
              borderRadius: `8px !important`
            }
          }
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            [`.MuiFormLabel-filled + .MuiOutlinedInput-root fieldset`]: {
              borderColor: `#c5c5c5 !important`
            },
            [`.MuiFormLabel-filled + .MuiOutlinedInput-root`]: {
              backgroundColor: `#ffffff`
            }
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: 14,
            marginLeft: 0,
            marginRight: 0,
            fontSize: 14,
            lineHeight: "19px",
            color: "rgba(0,0,0,0.6)"
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            [`& fieldset`]: {
              borderColor: "transparent"
            },
            [`&:hover fieldset`]: {
              borderColor: "#c5c5c5 !important"
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            color: "rgba(0, 0, 0, 0.6)"
          }
        },
        variants: [
          {
            props: { variant: "h1" },
            style: {
              fontWeight: "bold"
            }
          },
          {
            props: { variant: "h2" },
            style: {
              fontWeight: "bold"
            }
          },
          {
            props: { variant: "h3" },
            style: {
              fontWeight: "bold"
            }
          },
          {
            props: { variant: "h4" },
            style: {
              fontWeight: "bold"
            }
          },
          {
            props: { variant: "h5" },
            style: {
              fontWeight: "bold"
            }
          },
          {
            props: { variant: "h6" },
            style: {
              fontWeight: "bold"
            }
          }
        ]
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            [`&::after,&::before`]: {
              display: "none"
            }
          }
        }
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            py: 0,
            borderRadius: "8px",
            fontSize: 16,
            [`&.MuiButton-text`]: {
              boxShadow: "none !important"
            },
            textTransform: "capitalize",
            color: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(33, 33, 33, 0.12)"
          }
        },
        variants: [
          {
            props: { variant: "bordered" },
            style: {
              paddingTop: "8px !important",
              paddingBottom: "8px !important",
              borderRadius: "40px",
              border: `1px solid ${dark ? "#D1D9DD" : "#D1D9DD"} !important`
            }
          },
          {
            props: { variant: "contained" },
            style: {
              color: "#fff",
              border: "none"
            }
          },
          {
            props: { variant: "outlined" },
            style: {
              color: "#05A565",
              border: "1px solid #05A565"
            }
          }
        ]
      }
    }
  })

  const media = theme.breakpoints.up("md")

  /* Responsive typographies here (only base typographies(for example header. not headerBold)) or default MUI */
  theme.typography.header = {
    fontSize: "1rem",
    lineHeight: "21px",
    [media]: {
      fontSize: "1.5rem",
      lineHeight: "37px"
    }
  }
  theme.typography.large = {
    fontSize: "0.875rem",
    lineHeight: "19px",
    [media]: {
      fontSize: "1.25rem",
      lineHeight: "28px"
    }
  }
  theme.typography.heading = {
    fontSize: "1rem",
    lineHeight: "25px",
    [media]: {
      fontSize: "1.125rem",
      lineHeight: "28px"
    }
  }
  theme.typography.bodyMedium = {
    fontSize: "0.85rem",
    lineHeight: "20.5px",
    [media]: {
      fontSize: "1rem",
      lineHeight: "35px"
    }
  }
  theme.typography.subtitle = {
    fontSize: "0.75rem",
    lineHeight: "19px",
    [media]: {
      fontSize: "0.875rem",
      lineHeight: "22px"
    }
  }
  theme.typography.small = {
    fontSize: "0.5rem",
    lineHeight: "8px",
    [media]: {
      fontSize: "0.75rem",
      lineHeight: "12px"
    }
  }
  theme.typography = {
    ...theme.typography,
    ...variantsGenerator(theme.typography)
  }

  return theme
}

export default create
