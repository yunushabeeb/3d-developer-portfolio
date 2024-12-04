// Importing necessary hooks and components
import { useRef, useState, ChangeEvent, FormEvent } from 'react'; // React hooks for state and form handling
import { motion } from 'framer-motion'; // For smooth animations
import emailjs from '@emailjs/browser'; // For sending emails using the EmailJS service

// Importing styles and custom components
import { styles } from '../styles';
import { EarthCanvas } from './canvas'; // 3D Earth component
import { SectionWrapper } from '../hoc'; // HOC for wrapping sections
import { slideIn } from '../utils/motions'; // Motion utility for animations

// Contact component
const Contact = () => {
  // Ref to the form element
  const formRef = useRef<HTMLFormElement>(null);

  // State to manage form inputs and loading status
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle input field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, // Update specific field in form state
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submit behavior
    setLoading(true); // Set loading state to true while sending the email

    console.log(form); // Log the form data (for debugging)

    // Sending email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        {
          from_name: form.name, // Form data for the email
          to_name: 'Yunus Habeeb', // Receiver's name
          from_email: form.email, // Sender's email
          to_email: 'habeebdh1@gmail.com', // Receiver's email
          message: form.message, // Message content
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key for authorization
      )
      .then(
        () => {
          setLoading(false); // Set loading state to false after success
          alert('Thank you. I will get back to you as soon as possible.'); // Success message
          setForm({
            name: '',
            email: '',
            message: '', // Reset the form
          });
        },
        (error) => {
          setLoading(false); // Set loading state to false on error
          console.error(error); // Log the error
          alert('Ahh, something went wrong. Please try again.'); // Error message
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-between overflow-hidden`}
    >
      {/* Left side container for the contact form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)} // Slide-in animation from left
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* Section title and subtitle */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Form to submit contact details */}
        <form
          ref={formRef} // Linking form reference
          onSubmit={handleSubmit} // Form submit handler
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name" // Name field
              value={form.name} // Bind form state
              onChange={handleChange} // Input change handler
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email" // Email field
              value={form.email} // Bind form state
              onChange={handleChange} // Input change handler
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7} // Set the number of rows for the textarea
              name="message" // Message field
              value={form.message} // Bind form state
              onChange={handleChange} // Input change handler
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}{' '}
            {/* Display "Sending..." while loading */}
          </button>
        </form>
      </motion.div>

      {/* Right side container for the Earth 3D canvas */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)} // Slide-in animation from right
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas /> {/* 3D Earth component */}
      </motion.div>
    </div>
  );
};

// Wrapping the component with SectionWrapper for styling and structure
export default SectionWrapper(Contact, 'contact');
