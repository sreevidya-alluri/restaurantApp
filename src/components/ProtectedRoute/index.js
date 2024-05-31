import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')

  if (!jwtToken) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} render={props => <Component {...props} />} />
}

export default ProtectedRoute
