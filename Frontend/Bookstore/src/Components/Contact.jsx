import  { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = 'https://formspree.io/f/xgvwpebr';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Error sending message. Please try again.');
            }
        } catch (error) {
            setStatus(error);
        }
    };

  return (
    <>
    <Navbar/>
    <section className=" text-white py-12 border-t-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Feel Free To Contact Us</h2>
        <div className="max-w-lg mx-auto">
          {/* form code */}
         <div className="contact-form-container  border text-white">
            <h2 className='text-white'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className='  text-white border lg:py-2 py-1 px-4 lg:px-6 mt-2 relative border-l-8'>Send</button>
            </form>
            {status && <p className="form-status">{status}</p>}
        </div>
        </div>
         {/* Location Map */}
         <div className="max-w-lg mx-auto lg:max-w-none mt-6">
            <iframe
              className="w-full h-96 rounded-md shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224176.13213606697!2d77.18725822742307!3d28.42389910957727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb494e6db1d5%3A0x200fba18d37356c2!2sSanjay%20Colony%2C%20Sector%2023%2C%20Faridabad%2C%20Haryana%20121005%2C%20India!5e0!3m2!1sen!2sin!4v1692023825298!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Contact;

