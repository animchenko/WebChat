import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
    mapPropsToValues: () => ({ email: ''}),
    validate: values => {
        let errors = {};
        if(!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'BasicForm' //helps with React DevTools
})(RegisterForm);