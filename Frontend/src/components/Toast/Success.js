import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
    const {message } = useSelector(state => state.toastify);
    const dispatch = useDispatch();

   
    return toast.success('jdkjk', {
        onClose: () => dispatch({
            type: 'RESET_TOAST',
        })
    });
}
export default Success;
