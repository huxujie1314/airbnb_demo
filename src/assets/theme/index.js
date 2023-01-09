// const lightTheme = {

// };

// const darkTheme = {

// }

const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    transition: box-shadow 0.2s ease;
    `,
    flex_center_center: `
    display: flex;
    justify-content: center;
    align-items: center;
    `,
    flex_between: `
      display: flex;
      justify-content: space-between;
    `,
    flex_center: `
      display: flex;
      justify-content: center;
    `,
  },
};
export default theme;
