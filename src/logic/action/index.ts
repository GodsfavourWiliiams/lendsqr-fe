// Action to set the dashboard menu state
export const setDashboardMenu = (menu:any) => ({
    type: "SET_DASHBOARD_MENU",
    payload: menu,
  });
  
  // Action to set the user detail nav state
  export const setUserDetailNav = (nav:any) => ({
    type: "SET_USER_DETAIL_NAV",
    payload: nav,
  });
  
  // Action to set the modal filter state
  export const setModalFilter = (filter:any) => ({
    type: "SET_MODAL_FILTER",
    payload: filter,
  });
  
  // Action to set the filter modal toggle state
  export const setFilterModalToggle = (toggle:any) => ({
    type: "SET_FILTER_MODAL_TOGGLE",
    payload: toggle,
  });
  
  // Action to set the global filter state
  export const setGlobalFilter = (filter:any) => ({
    type: "SET_GLOBAL_FILTER",
    payload: filter,
  });
  