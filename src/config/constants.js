export const logoUrl = process.env.REACT_APP_COMPANY_LOGO;
export const companyName = process.env.REACT_APP_COMPANY_NAME;
const capabilities = process.env.REACT_APP_CAPABILITIES;
const capabilitiesArray = capabilities.split(",");
export const routesConfig = capabilitiesArray.map((val) => ({
  name: val,
  path: val,
}));
