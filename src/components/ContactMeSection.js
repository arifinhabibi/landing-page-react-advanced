import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen, onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values, { resetForm, preventDefault }) => {
      preventDefault;
      submit("", values)
        .then((resp) => {
          onOpen(resp.type, resp.message);
          resetForm();
        })
        .catch((err) => {
          onOpen(err.type, err.message);
        });
      setTimeout(() => {
        onClose();
      }, 3000);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      type: Yup.string(),
      comment: Yup.string().required(),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      firstName: e.target.value,
                    });

                    formik.setTouched({ ...formik.touched, firstName: true });
                  }}
                />
                {formik.errors.firstName ? (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      email: e.target.value,
                    });

                    formik.setTouched({ ...formik.touched, email: true });
                  }}
                />
                {formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  variant="outline"
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      type: e.target.value,
                    });
                    formik.setTouched({ ...formik.touched, type: true });
                  }}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      comment: e.target.value,
                    });
                    formik.setTouched({ ...formik.touched, comment: true });
                  }}
                />
                {formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              {!isLoading ? (
                <Button type="submit" colorScheme="purple" width="full">
                  Submit
                </Button>
              ) : (
                <Button
                  isLoading
                  type="submit"
                  colorScheme="purple"
                  width="full"
                  loadingText="Loading"
                  spinnerPlacement="end">
                  Submit
                </Button>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
