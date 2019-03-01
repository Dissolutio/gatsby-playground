import Typography from "typography";
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards";

const typography = new Typography({
  ...usWebDesignStandardsTheme,
  baseFontSize: "16px"
});

export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;
