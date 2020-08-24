import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../actions/users';
import Input from '../common/Input';
import { storage } from '../../firebase/firebase';

const StyledForm = styled.form.attrs({
  className: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
})`
  & {
    label {
      ${tw`block text-gray-700 text-sm font-bold mb-2`}
    }

    input {
      ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    }
  }

  button {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  }
`;

const FormC = () => {
  const { signUpUserCompany } = userActions;
  const dispatch = useDispatch();
  const { addressArr, compPersonalArr } = useSelector(state => state.users.infoArrays);
  const allInputs = { imgUrl: '' };
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      header: '',
      country: '',
      cep: '',
      state: '',
      city: '',
      hood: '',
      street: '',
      cel: '',
      cnpj: '',
      size: '',
      aboutUs: '',
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
    //   email: Yup.string().email('It needs to be a valid email').required('Please Enter your email'),
    //   password: Yup.string().min(1, 'Needs to be bigger than 2 characters').required('Please Enter your password')
    //     .matches(
    //       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    //     ),
    //   passwordConfirmation: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    // }),
    onSubmit: values => {
      // Handle image uploading

      const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
      // initiates the firebase side uploading
      uploadTask.on('state_changed',
        snapShot => {
        // takes a snap shot of the process as it is happening
          console.log(snapShot);
        }, err => {
        // catches the errors
          console.log(err);
        }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage.ref('images').child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
              setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }));
              console.log(fireBaseUrl);

              // normal form
              const {
                name, header, country, cep, state, city, hood, street, cel, cnpj, size, aboutUs, email, password,
              } = values;
              const newObj = {
                user: {
                  email,
                  password,
                },
                company: {
                  name,
                  header,
                  image_url: fireBaseUrl,
                  company_address: {
                    country,
                    cep,
                    state,
                    city,
                    hood,
                    street,
                    cel,
                  },
                  company_personal: {
                    cnpj,
                    size,
                    aboutUs,
                  },
                },
              };
              dispatch(signUpUserCompany(newObj));
            });
        });
    },
  });
  console.log(imageAsFile);
  const handleImage = e => {
    e.persist();
    const image = e.target.files[0];
    setImageAsFile(imageFile => (image));
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {/* {redirect ? <Redirect to="/users/user" /> : ''} */}
      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? (
          <div>
            {formik.errors.email}
          </div>
        ) : ''}

      </div>
      <div className="mb-4">
        <label htmlFor="name">Password</label>
        <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? (
          <div>
            {formik.errors.password}
          </div>
        ) : ''}

      </div>
      <div className="mb-4">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input type="password" id="passwordConfirmation" onChange={formik.handleChange} value={formik.values.passwordConfirmation} />
        {formik.errors.passwordConfirmation ? (
          <div>
            {formik.errors.passwordConfirmation}
          </div>
        ) : ''}

      </div>

      {addressArr.map(field => (
        <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />
      ))}

      {compPersonalArr.map(field => (
        <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />
      ))}
      <div className="image">

        <label>Image Upload</label>
        <input type="file" name="image" onChange={handleImage} />
      </div>
      <button type="submit">Submit</button>

    </StyledForm>
  );
};

export default FormC;
