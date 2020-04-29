const media = type => {
  switch (type) {
    case "medium-up":
    default:
      return `@media only screen and (min-width: ${breakpoints.phablet})`
  }
}

const breakpoints = {
  phone: "0",
  mediumphone: "375px",
  phablet: "769px",
  tablet: "985px",
  laptop: "1281px",
  desktop: "1521px",
  xlDesktop: "1920px",
}

export default media
