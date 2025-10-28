import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="ContactPage">
      {/* Hero Section */}
      <section className="ContactHero">
        <div className="Container">
          <div className="ContactHeroContent">
            <h1 className="ContactTitle">Get In Touch</h1>
            <p className="ContactSubtitle">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="ContactContent">
        <div className="Container">
          <div className="ContactGrid">
            {/* Contact Information */}
            <div className="ContactInfo">
              <h2>Let's Start a Conversation</h2>
              <p className="ContactDescription">
                Whether you have questions about our products, need cooking advice, 
                or want to discuss wholesale opportunities, we're here to help.
              </p>

              <div className="ContactMethods">
                <div className="ContactMethod">
                  <div className="MethodIcon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="MethodInfo">
                    <h3>Call Us</h3>
                    <a href="tel:0799844807" className="PhoneLink">079 984 4807</a>
                    <span className="MethodNote">Mon-Fri from 8am to 6pm</span>
                  </div>
                </div>

                <div className="ContactMethod">
                  <div className="MethodIcon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="MethodInfo">
                    <h3>Email Us</h3>
                    <a href="mailto:hello@chingu.co.za" className="EmailLink">hello@chingu.co.za</a>
                    <span className="MethodNote">We'll reply within 24 hours</span>
                  </div>
                </div>

                <div className="ContactMethod">
                  <div className="MethodIcon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="MethodInfo">
                    <h3>Visit Us</h3>
                    <p>Woltemade 5<br />eMalahleni<br />1034, South Africa</p>
                    <span className="MethodNote">Mon-Sat: 8AM-6PM</span>
                  </div>
                </div>

                <div className="ContactMethod">
                  <div className="MethodIcon">
                    <i className="bi bi-chat"></i>
                  </div>
                  <div className="MethodInfo">
                    <h3>Live Chat</h3>
                    <p>Available on website</p>
                    <span className="MethodNote">Real-time support during business hours</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="ContactSocial">
                <h3>Follow Our Journey</h3>
                <div className="SocialLinks">
                  <a href="#" className="SocialLink" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="SocialLink" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="SocialLink" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="SocialLink" aria-label="TikTok">
                    <i className="bi bi-tiktok"></i>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="ContactFormSection">
              <div className="ContactFormCard">
                <h2>Send Us a Message</h2>
                <form className="ContactForm" onSubmit={handleSubmit}>
                  <div className="FormGroup">
                    <label htmlFor="name" className="FormLabel">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="FormInput"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="FormGroup">
                    <label htmlFor="email" className="FormLabel">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="FormInput"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="FormGroup">
                    <label htmlFor="subject" className="FormLabel">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="FormSelect"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Questions</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="recipes">Cooking Advice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="FormGroup">
                    <label htmlFor="message" className="FormLabel">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="FormTextarea"
                      placeholder="Tell us how we can help you..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="SubmitButton">
                    <i className="bi bi-send"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="ContactMap">
        <div className="Container">
          <div className="MapHeader">
            <h2>Visit Our Store</h2>
            <p>Come experience our products in person</p>
          </div>
          <div className="MapContainer">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.585294579917!2d29.227350976055256!3d-25.8831230772759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaeddf3286f0d1%3A0x6f194c3b7f8cb370!2sChingu%20Trading!5e0!3m2!1sen!2sza!4v1761635252106!5m2!1sen!2sza" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Chingu Trading Location Map"
            ></iframe>
            <div className="StoreInfo">
              <div className="StoreDetail">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>Woltemade 5, eMalahleni, 1034</p>
                </div>
              </div>
              <div className="StoreDetail">
                <i className="bi bi-clock"></i>
                <div>
                  <h4>Store Hours</h4>
                  <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="StoreDetail">
                <i className="bi bi-telephone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:0799844807">079 984 4807</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ContactFAQ">
        <div className="Container">
          <div className="FAQHeader">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="FAQGrid">
            <div className="FAQItem">
              <h3>What are your delivery areas?</h3>
              <p>We deliver across South Africa. Major cities: 1-3 business days. Rural areas: 3-5 business days. Free delivery on orders over R500.</p>
            </div>
            <div className="FAQItem">
              <h3>Do you offer wholesale pricing?</h3>
              <p>Yes! We offer special wholesale pricing for restaurants, retailers, and bulk buyers. Contact us with your requirements.</p>
            </div>
            <div className="FAQItem">
              <h3>How do I track my order?</h3>
              <p>You'll receive a tracking number via email once your order ships. You can also track it in your account dashboard.</p>
            </div>
            <div className="FAQItem">
              <h3>What's your return policy?</h3>
              <p>We accept returns within 30 days for unopened products. Perishable items must be returned within 7 days of delivery.</p>
            </div>
            <div className="FAQItem">
              <h3>Do you source specific Asian products?</h3>
              <p>Absolutely! We're always looking to expand our range. Suggest products and we'll do our best to source them for you.</p>
            </div>
            <div className="FAQItem">
              <h3>Can I get cooking advice?</h3>
              <p>Yes! Our team includes Asian cuisine experts. Contact us for recipe suggestions and cooking techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;