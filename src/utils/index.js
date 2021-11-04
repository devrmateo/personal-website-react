import { ScrollArrow } from "./ScrollArrow";
import { ScrollToTop } from "./ScrollToTop";

export { ScrollArrow, ScrollToTop };
export const toggleDrawer = (drawerState, setDrawerState) => {
  if (drawerState === "drawer") {
    setDrawerState("drawer open");
  } else {
    setDrawerState("drawer");
  }
};

export const closeDrawer = (drawerState, setDrawerState) => {
  if (drawerState === "drawer open") {
    setDrawerState("drawer");
  }
};
