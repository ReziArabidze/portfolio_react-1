import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import type { PersonalInfo } from '../../types';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('გთხოვთ შეავსოთ ყველა აუცილებელი ველი.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const contactItems = [
    {
      iconName: 'mail',
      label: 'ელ. ფოსტა',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      iconName: 'phone',
      label: 'ტელეფონი',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      iconName: 'map-pin',
      label: 'მდებარეობა',
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section-container">
      <SectionTitle
        badge="კონტაქტი"
        title="დამიკავშირდით"
        highlight="პროექტისთვის"
        description="გაქვთ იდეა ან გჭირდებათ დეველოპერი გუნდში? მომწერეთ და განვიხილოთ დეტალები."
      />

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info-column">
          <div className="contact-cards-list">
            {contactItems.map((item, idx) => (
              <Card key={idx} className="contact-info-card" hoverable={true}>
                <div className="contact-info-icon">
                  <Icon name={item.iconName} size={22} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-info-value contact-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{item.value}</span>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="contact-socials-card" glow={true}>
            <h4 className="socials-card-title">სოციალური ქსელები</h4>
            <p className="socials-card-desc">
              შემომიერთდით ან მომწერეთ ჩემს პროფესიულ პროფილებზე:
            </p>
            <div className="contact-social-buttons">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                >
                  <Icon name={social.iconName} size={18} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Side: Interactive Form */}
        <Card className="contact-form-card" glow={true}>
          <h3 className="contact-form-title">გამომიგზავნეთ შეტყობინება</h3>

          {status === 'success' ? (
            <div className="contact-success-banner">
              <div className="success-icon">
                <Icon name="check" size={28} />
              </div>
              <h4>შეტყობინება წარმატებით გაიგზავნა!</h4>
              <p>დიდი მადლობა დაკავშირებისთვის. უმოკლეს დროში გიპასუხებთ.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    თქვენი სახელი *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="მაგ: გიორგი"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    ელ. ფოსტა *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  თემა / პროექტის ტიპი
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="მაგ: ახალი ვებსაიტის დამზადება"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  შეტყობინება *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="აღწერეთ მოკლედ თქვენი იდეა ან შეკითხვა..."
                  className="form-textarea"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'submitting'}
                icon={<Icon name="send" size={18} />}
                className="w-full"
              >
                {status === 'submitting' ? 'იგზავნება...' : 'გაგზავნა'}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

