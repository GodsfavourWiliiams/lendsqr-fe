export interface DashboardState {
    dashboardMenu: string;
    userDetailNav: string;
    modalFilter: {
      org: string;
      username: string;
      email: string;
      phoneNumber: string;
      status: string;
    };
    filterModalToggle: boolean;
    globalFilter: string;
  }

  export interface RootState {
    dashboardReducer: DashboardState;
  }
  