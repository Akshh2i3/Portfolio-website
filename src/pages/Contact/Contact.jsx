// {
// import React, { useRef } from 'react';
// import './Contact.scss';
// import { Navbar, Footer } from '../../components';
// import phone from '../../assets/phone.svg';
// import mail from '../../assets/email.svg';
// import { motion } from 'framer-motion';
// import data from '../../data';

// import { database } from '../../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../../background.css';

// const Contact = () => {
//   const collectionRef = collection(database, 'users');

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const budgetRef = useRef(null);
//   const descriptionRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const budget = budgetRef.current.value;
//     const description = descriptionRef.current.value;

//     if (!name || !email || !budget || !description) {
//       toast.error('Enter all the field', {
//         autoClose: 1000,
//       });
//     } else {
//       addDoc(collectionRef, {
//         name,
//         email,
//         budget,
//         description,
//       })
//         .then(() => {
//           toast.success('Will Contact You Shortly 😊');
//         })
//         .catch((err) => {
//           toast.error(err.message);
//         });
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="contact"
//     >
//       <Navbar />
//       <div className="contents">
//         <div className="content-left">
//           <div className="text">
//             <h1 className="gradient__text">Get in touch</h1>
//             <p>
//               Have a project in mind? Looking to partner or work together? Reach
//               out through the form and I'll get back to you in the next 24 hours.
//             </p>
//           </div>
//           <div className="text">
//             <span>
//               <img src={mail} alt="" />
//               <a href="mailto:akshaysethiya.connect@gmail.com">{data.emailId}</a>
//               <div></div>
//             </span>
//             <span>
//               <img src={phone} alt="" />
//               <p>{data.phoneNo}</p>
//               <div></div>
//             </span>
//           </div>
//         </div>
//         <form className="content-right">
//           <div className="input-items">
//             <label>Your Name</label>
//             <input ref={nameRef} placeholder={data.name} type="text" />
//           </div>
//           <div className="input-items">
//             <label>Your Email</label>
//             <input ref={emailRef} placeholder={data.emailId} type="email" />
//           </div>
//           <div className="input-items">
//             <label>Your approximate budget (USD $)</label>
//             <input
//               ref={budgetRef}
//               placeholder={data.approximateBudget}
//               type="number"
//             />
//           </div>
//           <div className="input-items">
//             <label>Tell more what you are looking for?</label>
//             <input
//               ref={descriptionRef}
//               placeholder="I want a website for my business "
//               type="text"
//             />
//           </div>
//           <button to="/" className="cta-btn" onClick={handleSubmit}>
//             Contact Me
//           </button>
//         </form>
//       </div>
//       <Footer />
//       <div class="area">
//         <ul class="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={1000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </motion.div>
//   );
// };

// export default Contact;
// }


import React, { useRef } from 'react';
import './Contact.scss';
import { Navbar, Footer } from '../../components';
import phone from '../../assets/phone.svg';
import mail from '../../assets/email.svg';
import { motion } from 'framer-motion';
import data from '../../data';

import emailjs from 'emailjs-com';  // Import emailjs-com

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../background.css';

// Define your EmailJS service, template, and user IDs
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formRef.current.name.value;
    const emailValue = formRef.current.email.value;
    const budget = formRef.current.budget.value;
    const description = formRef.current.description.value;

    if (!name || !emailValue || !budget || !description) {
      toast.error('Please fill in all the fields', {
        autoClose: 1000,
      });
    } else {
      try {
        const templateParams = {
          from_name: name,
          from_email: emailValue,
          budget: budget,
          message: description,
          to_email: 'akshaysethiya.connect@gmail.com',
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
        toast.success('Message Delivered');
        formRef.current.reset();  // Clear the form after submission
      } catch (error) {
        toast.error('Failed to send email: ' + error.message);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <Navbar />
      <div className="contents">
        <div className="content-left">
          <div className="text">
            <h1 className="gradient__text">Get in touch</h1>
            <p>
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 24 hours.
            </p>
          </div>
          <div className="text">
            <span>
              <img src={mail} alt="" />
              <a href="mailto:akshaysethiya.connect@gmail.com">{data.emailId}</a>
              <div></div>
            </span>
            <span>
              <img src={phone} alt="" />
              <p>{data.phoneNo}</p>
              <div></div>
            </span>
          </div>
        </div>
        <form ref={formRef} className="content-right" onSubmit={handleSubmit}>
          <div className="input-items">
            <label>Your Name</label>
            <input name="name" placeholder={data.name} type="text" />
          </div>
          <div className="input-items">
            <label>Your Email</label>
            <input name="email" placeholder={data.emailId} type="email" />
          </div>
          <div className="input-items">
            <label>Your approximate budget (USD $)</label>
            <input
              name="budget"
              placeholder={data.approximateBudget}
              type="number"
            />
          </div>
          <div className="input-items">
            <label>Tell more about what you are looking for</label>
            <input
              name="description"
              placeholder="I want a website for my business"
              type="text"
            />
          </div>
          <button type="submit" className="cta-btn">
            Contact Me
          </button>
        </form>
      </div>
      <Footer />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default Contact;
