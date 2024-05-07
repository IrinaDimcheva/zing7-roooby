'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/ui/button';
import toast from 'react-hot-toast';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    message: yup.string().required('Message cannot be empty'),
  })
  .required();

export default function MessageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: FormValues) {
    // console.log('data', data);
    reset();
    toast.success('Message sent!');
  }

  return (
    <section className="xl:max-w-[555px] w-full max-h-[462px] h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white p-5 rounded-lg outline-none w-full"
            {...register('name')}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            className="bg-white p-5 rounded-lg outline-none w-full"
            {...register('email')}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={7}
            className="bg-white p-5 rounded-lg resize-none outline-none w-full"
            {...register('message')}
          ></textarea>
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>
        <Button
          label="Send message >"
          bgColor="bg-accent-dark"
          borderColor="bg-accent-dark"
          className="py-4 rounded-[9px] w-[206px] hover:text-accent-dark hover:bg-white hover:border-accent-dark"
        />
      </form>
    </section>
  );
}
