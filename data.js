const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
  showTbs: true,
  showGithub: true,
};

function featureFlagDataService() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(() => resolve(dummyApiResponse), 500);
    } else {
      reject("Some error occurred! Please try again");
    }
  });
}

export default featureFlagDataService;
