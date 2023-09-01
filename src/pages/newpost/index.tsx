import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';

import { initialValues, validationSchema } from '@/apps/forms/createPostForm';
import { createNewPost } from '@/apps/server/handleFetchPosts';
import LoadingSpinner from '@/component/elements/LoadingSpinner';
import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import PostCreated from '@/component/modules/posts/PostCreated';
import { Main } from '@/component/templates/Main';

const Index = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();

  const createPost = async (postData: typeof initialValues) => {
    await createNewPost(postData);
  };

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      toast({
        title: 'Post created.',
        description: "We've created your Post for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    },
    onError: () => {
      toast({
        title: 'sorry, we have error',
        description: "We've an error while creating your Post",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    },
  });

  if (mutation.isLoading) {
    return <LoadingSpinner />;
  }

  if (mutation.isError) {
    return (
      <BlogLayout>
        <VStack spacing={20} align="center" p="10" maxW="1280" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="semibold">
            Sorry , we have error accuored right now , please try again
          </Heading>
        </VStack>
      </BlogLayout>
    );
  }

  if (mutation.isSuccess) {
    // console.log(mutation.variables);
    return <PostCreated mutation={mutation} />;
  }

  return (
    <Main meta={<Meta title="New Post" description="create new post" />}>
      <BlogLayout>
        <Heading size="lg" fontWeight="bold" fontSize="2xl">
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
                    <Input
                      {...field}
                      placeholder="Blog title"
                      variant="filled"
                    />
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
                    <Input {...field} placeholder="Author" variant="filled" />
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
                    <Textarea
                      {...field}
                      placeholder="Blog Body"
                      variant="filled"
                    />
                    <FormErrorMessage>{form.errors.blogBody}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Stack spacing={20} align="center" p="10">
                <Flex
                  direction={{ base: 'column-reverse', lg: 'row' }}
                  gap={8}
                  align="center"
                  justifyContent="space-between"
                  w="full"
                >
                  <Button
                    mt={4}
                    colorScheme="gray"
                    type="button"
                    variant="outline"
                    w="44"
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={mutation.isLoading}
                    type="submit"
                    color="white"
                    variant="ghost"
                    style={{ backgroundColor: 'purple' }}
                    w="44"
                  >
                    Publish
                  </Button>
                </Flex>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </BlogLayout>
    </Main>
  );
};

export default Index;
