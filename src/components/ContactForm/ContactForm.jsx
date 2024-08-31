import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({onAdd}) => {

const nameFieldId = useId();
    const numberFieldId = useId();
    const idFieldId = nanoid();
  
    const handleSubmit = (values, { resetForm }) => {
        onAdd({
        id: idFieldId,
        name: values.name,
        number: values.number,
    })
    resetForm();
  };

  return (
      <Formik   
      initialValues={initialValues}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
      >
          {({ isValid }) => (
              <Form className={css.form} >
                  <div className={css.input}>
                      <label htmlFor={nameFieldId}>Name</label>
                      <Field type="text" name="name" id={nameFieldId} />
                      <ErrorMessage name="name" component="span" />
                  </div>

                  <div className={css.input}>
                      <label htmlFor={numberFieldId}>Number</label>
                      <Field type="text" name="number" id={numberFieldId} />
                      <ErrorMessage name="number" component="span" />
                  </div>

        

                  <button disabled={!isValid} className={css.btn} type="submit">Add contact</button>
              </Form>)}
    </Formik>
  );

    
}

export default ContactForm;