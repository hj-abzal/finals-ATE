
const initialState = {
    email: '',
    password: '',
    confirmPassword: ''
}
export const registrationReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
      case 'REGISTER': {
          return
      }
      case 'CANCEL': {

      }
  }
}

export const registerAC = (email: string, password :string) => {
  return {type: 'REGISTER', email, password}
}

export const cancelAC = () => {
  return{type: 'CANCEL'}
}