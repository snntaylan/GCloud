/**
 * Since creating all font-faces takes lots of code lines, i placed them here for code organization.
 */
const CssBaselineOverrides = {
  styleOverrides: `
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    a {
      text-decoration: none;
    }
    
  `
}

export default CssBaselineOverrides
