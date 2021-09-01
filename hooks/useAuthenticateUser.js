import { useDispatch } from 'react-redux'
import { logUserIn, toggleLoadingModal } from '../reducers/authenticationSlice'

export default function useAuthenticateUser() {
    const dispatch = useDispatch()

    const login = () => {
        dispatch(toggleLoadingModal(true))
        
        setTimeout(() => {
            dispatch(toggleLoadingModal(false))
            dispatch(logUserIn())
            
        }, 1000);
    }

    return login
}
