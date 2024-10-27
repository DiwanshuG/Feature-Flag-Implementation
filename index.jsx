import LightDarkMode from "../theme-switch";
import Accordian from "../accordian";
import RandomColor from "../random-color";
import TreeView from "../Tree-view-menu";
import TicTacToe from "../tic-tac-toe";
import menus from "../Tree-view-menu/data";
import TabTest from "../custom-tabs/tabs-test";
import GithubProfileFinder from "../github-profile-finder";
import { useContext } from "react";
import { featureFlagContext } from "./context";
import "./styles.css";


export default function FeatureFlags() {
  const { loading, enabledFlag } = useContext(featureFlagContext);

  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTbs",
      component: <TabTest />,
    },
    {
      key: "showGithub",
      component: <GithubProfileFinder />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlag[getCurrentKey];
  }

  if (loading) return <h1>Loading Data! Please Wait..</h1>;

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentToRender.map((componetItem) =>
        checkEnabledFlags(componetItem.key) ? componetItem.component : null
      )}
    </div>
  );
}
