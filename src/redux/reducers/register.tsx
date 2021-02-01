type RegisterStateType = typeof initState;
const initState = {
  login: "",
  password: "",
  name: '',
  lastName: ''
};

export const registerReducer = (state: RegisterStateType = initState,action: any): RegisterStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
