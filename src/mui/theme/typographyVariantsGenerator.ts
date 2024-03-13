import {
  TypographyInThemeVariants,
  typographyWeights,
  typographyWeightNumbers,
  baseTypographyVariants,
  BaseTypographyInThemeVariant,
} from "./declarations";
// import { mutableObj } from "@/utils";

type generatorType = (
  themeTypography: Partial<BaseTypographyInThemeVariant> | any
) => Partial<TypographyInThemeVariants>;

const variantsGenerator: generatorType = (themeTypography) => {
  const returnValue: Partial<TypographyInThemeVariants> = {};
  // for (let key in themeTypography) {
  //   if (baseTypographyVariants.find((baseVariant) => baseVariant === key)) {
  //     for (let weightItem of typographyWeights) {
  //       returnValue[`${key}${weightItem}`] = mutableObj(themeTypography[key]);
  //       returnValue[`${key}${weightItem}`].fontWeight =
  //         typographyWeightNumbers[weightItem];
  //     }
  //   }
  // }
  return returnValue;
};

export default variantsGenerator;
