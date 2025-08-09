
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make sure the formRef is valid and send the email using emailjs
    if (formRef.current) {
      emailjs.sendForm(
        'service_2jdl60n',  //service ID
        'template_jybus9l', //template ID
        formRef.current,
        'cGVBGgkYZeoNJhu3a'  //public key
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Thank you for your message. I'll get back to you soon!", {
          duration: 5000,
          position: 'bottom-right',
          style: {
            background: '#22396cff',
            color: '#ffffff',
          },
        });
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again later.", {
          duration: 5000,
          position: 'bottom-right',
          style: {
            background: '#dd3358ff',
            color: '#ffffff',
          },
        });
      });

      setFormState({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-element");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Toaster />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Drop me a message and I'll get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-white/90 dark:bg-gray-900 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-gray-950/50 p-8 border border-gray-200/50 dark:border-gray-800 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a href="mailto:harshasamare25@gmail.com" className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    harshasamare25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <a href="tel:+94763537831" className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +94 76 3 537 831
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">No.274, Paranawtta, New Colombo Road Polgahawela, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/90 dark:bg-gray-900 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-gray-950/50 overflow-hidden h-[200px] relative border border-gray-200/50 dark:border-gray-800 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3957.2676253143063!2d80.2947110744854!3d7.323807313347209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMjUuNyJOIDgwwrAxNyc1MC4yIkU!5e0!3m2!1sen!2slk!4v1753289038483!5m2!1sen!2slk"
                className="w-full h-full object-cover border-none"
                title="Location Map"
                allowFullScreen
                loading="lazy"
              />
            </div>
        
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 dark:bg-gray-900 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-gray-950/50 p-8 border border-gray-200/50 dark:border-gray-800 transition-all duration-300 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white gap-2 transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
