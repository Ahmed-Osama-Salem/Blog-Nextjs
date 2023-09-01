import * as Yup from 'yup';

export interface CreatePostValues {
  blogTitle: string;
  author: string;
  blogBody: string;
}

const initialValues: CreatePostValues = {
  blogTitle: '',
  author: '',
  blogBody: '',
};

const validationSchema = Yup.object().shape({
  blogTitle: Yup.string()
    .required('Title is required')
    .max(100, 'Title must be less than 100 characters'),
  author: Yup.string().required('Author is required'),
  blogBody: Yup.string()
    .required('Content is required')
    .min(50, 'Content must be more than 50 characters'),
});

export { initialValues, validationSchema };
