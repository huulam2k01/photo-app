import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
// import Select from "react-select";
import { Button, FormGroup, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
// import Images from "../../../../constants/images";
import InputField from "../../../../custom-fields/InputField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import SelectField from "../../../../custom-fields/SelectField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.propTypes = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log(values, errors, touched);
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="title"
              placeholder="Eg: Wow something ..."
            />

            {/* <Input type="text"></Input> */}

            <FastField
              name="categoryId"
              label="Category"
              component={SelectField}
              placeholder="what's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            ></FastField>
            {/* <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                id="categoryId"
                name="categoryId"
                placeholder="what's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup> */}

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Random Photo"
            ></FastField>

            {/* <FormGroup>
              <Label for="categoryID">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.anhgif}
                  alt="colorful"
                ></img>
              </div>
            </FormGroup> */}
            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="small" />}
                {isAddMode ? "Add to album" : "update"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
export default PhotoForm;
