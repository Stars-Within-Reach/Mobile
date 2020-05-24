 import { createStackNavigator} from 'react-navigation-stack';
 import { createAppContainer } from 'react-navigation';
 
 import signUp from '../Components/signUpPage';
 import LoginForm from '../Components/LoginForm';
 import App from '../App';
const screens = {
    App: {
        screen: App
    },
    LoginForm: {
        screen: LoginForm
    },
    signUp: {
        screen: signUp
    }

}
 const HomeStack = createStackNavigator(screens);

 export default createAppContainer(HomeStack);