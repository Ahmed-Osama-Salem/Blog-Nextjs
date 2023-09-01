import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';

import { initialValues, validationSchema } from '@/apps/forms/createPostForm';
import { createNewPost } from '@/apps/server/handleFetchPosts';
import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';

const Index = () => {
  const queryClient = useQueryClient();

  const createPost = async (postData: typeof initialValues) => {
    await createNewPost(postData);
  };

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  console.log(mutation);

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
