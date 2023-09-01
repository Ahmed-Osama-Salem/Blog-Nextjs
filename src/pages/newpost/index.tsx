import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Field, Form, Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';

import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';

const initialValues = { blogTitle: '', author: '', blogBody: '' };
const Index = () => {
  const queryClient = useQueryClient();

  const createPost = async (postData: typeof initialValues) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      // Assuming the API returns the created post data
      console.log('Created post:', data);
      return data;
    } catch (error) {
      console.error('Error creating post:', error);
      return error;
    }
  };

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const validationSchema = Yup.object().shape({
    blogTitle: Yup.string()
      .required('Title is required')
      .max(100, 'Title must be less than 100 characters'),
    author: Yup.string().required('Author is required'),
    blogBody: Yup.string()
      .required('Content is required')
      .min(50, 'Content must be more than 50 characters'),
  });

  return (
    <Main meta={<Meta title="New Post" description="create new post" />}>
      <BlogLayout>
        <Heading size="md" color="black" fontWeight="bold" fontSize="2xl">
          create new post
        </Heading>
        <Stack py="10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              mutation.mutate(values);
            }}
          >
            <Form className="space-y-10">
              <Field name="blogTitle">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.blogTitle && form.touched.blogTitle}
                  >
                    <FormLabel>Blog title</FormLabel>
                    <Input {...field} placeholder="Blog title" />
                    <FormErrorMessage>{form.errors.blogTitle}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="author">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.author && form.touched.author}
                  >
                    <FormLabel>Author</FormLabel>
                    <Input {...field} placeholder="Author" />
                    <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="blogBody">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.blogBody && form.touched.blogBody}
                  >
                    <FormLabel>Blog Body</FormLabel>
                    <Input {...field} placeholder="Blog Body" />
                    <FormErrorMessage>{form.errors.blogBody}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={mutation.isLoading}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Stack>
      </BlogLayout>
    </Main>
  );
};

export default Index;
