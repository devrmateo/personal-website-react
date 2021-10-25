export function toggleDrawer(drawerState, setDrawerState) {
  if (drawerState === "drawer") {
    setDrawerState("drawer open");
  } else {
    setDrawerState("drawer");
  }
}

export function closeDrawer(drawerState, setDrawerState) {
  if (drawerState === "drawer open") {
    setDrawerState("drawer");
  }
}
