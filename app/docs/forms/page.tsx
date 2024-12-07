import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Forms - Frontline Documentation',
  description:
    'Learn about form handling, validation, and advanced form techniques in frontend development.',
}

export default function FormsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Forms</h1>

      <section id='simple-form-handling'>
        <h2 className='text-2xl font-semibold mb-4'>Simple Form Handling</h2>
        <p>Basic form handling in different frameworks:</p>
        <CodeBlock
          snippets={{
            JS: `
// Vanilla JavaScript
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  console.log(data);
  // Handle form submission (like an API call)
});
          `,
            TS: `
// TypeScript
interface FormData {
  name: string;
  email: string;
}

document.querySelector('form')!.addEventListener('submit', function(e: Event) {
  e.preventDefault();
  const formData = new FormData(this as HTMLFormElement);
  const data: FormData = Object.fromEntries(formData) as FormData;
  console.log(data);
  // Handle form submission (like an API call)
});
          `,
            React: `
// React
import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission (like an API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;

// You can also manage it uncontrolling the form data
          `,
            Svelte: `
<!-- Svelte -->
<script lang="ts">
  let formData = {
    name: '',
    email: ''
  };

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  }
</script>

<form on:submit={handleSubmit}>
  <input
    type="text"
    bind:value={formData.name}
    placeholder="Name"
  />
  <input
    type="email"
    bind:value={formData.email}
    placeholder="Email"
  />
  <button type="submit">Submit</button>
</form>
          `,
          }}
        />
        <section id='validation-with-zod'>
          <h2 className='text-2xl font-semibold mb-4'>Validation with Zod</h2>
          <p>
            Validating form data with Zod is a great way to ensure that your
            form data is in the correct format.
          </p>
          <CodeBlock
            snippets={{
              'Zod + RHF': `
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
});

//You do not need to explicitly define a type, just use z.infer<T>
type FormData = z.infer<typeof formSchema>;

//you can access different methods, try them all!
const FormWithValidation: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  //When the form is submitted, you'll get the data that matches the schema
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const result = await response.json();
      alert(Success: {JSON.stringify(result)}');
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} /> // you can also use the 'name' property instead of register
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} /> // you can also use the 'name' property instead of register
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithValidation;

          `,
            }}
          />
          <p>
            You can also use the 'FormProvider component, wrapping the form,
            then use the 'useFormContext' hook
          </p>
          <p>
            to access the form state and methods, in any component that is a
            child of the 'FormProvider' component.
          </p>
          <CodeBlock
            snippets={{
              'FormProvider + useFormContext': `
              //...same above
<FormProvider {...methods}>
<Form />
</FormProvider>

//Form component
 const { register, handleSubmit, formState: { errors } } = useFormContext();

<form onSubmit={handleSubmit(onSubmit)}>
  <div>
    <label htmlFor="name">Name</label>
    <input id="name" {...register("name")} /> // you can also use the 'name' property instead of register
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input id="email" {...register("email")} /> // you can also use the 'name' property instead of register
  </div>
  <button type="submit">Submit</button>
</form>
              `,
            }}
          />
        </section>
        <section id='file-upload-and-preview'>
          <h2 className='text-2xl font-semibold mb-4'>
            File Upload and Preview
          </h2>
          <CodeBlock
            snippets={{
              React: `
                import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  file: FileList;
};

const FileUpload: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data.file[0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      {preview && <img src={preview} alt="Preview" style={{ width: 200, height: 200 }} />}
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;

                `,
            }}
          />
        </section>
        <section id='multi-step-forms'>
          <h2 className='text-2xl font-semibold mb-4'>Multi Step Forms</h2>
          <CodeBlock
            snippets={{
              'React + React Hook Form': `
            import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

type Step1Data = { name: string };
type Step2Data = { email: string };

const Step1: React.FC = () => {
  const { register } = useFormContext<Step1Data>();
  return (
    <div>
      <label>Name</label>
      <input {...register("name")} />
    </div>
  );
};

const Step2: React.FC = () => {
  const { register } = useFormContext<Step2Data>();
  return (
    <div>
      <label>Email</label>
      <input {...register("email")} />
    </div>
  );
};

const MultiStepForm: React.FC = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        <button
          type="button"
          onClick={() => setStep((prev) => (prev === 1 ? 2 : 1))}
        >
          {step === 1 ? "Next" : "Back"}
        </button>
        {step === 2 && <button type="submit">Submit</button>}
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;

            `,
            }}
          />
        </section>
      </section>
    </div>
  )
}
