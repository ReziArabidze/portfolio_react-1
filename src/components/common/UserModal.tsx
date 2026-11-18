import React, { useEffect } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { Icon } from './Icon';
import type { User } from '../../types';

interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (user) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [user, onClose]);

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container user-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="დახურვა"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="user-modal-header">
          <div className="user-modal-avatar">
            {getInitials(user.name)}
          </div>
          <div>
            <div className="user-modal-title-row">
              <h3 className="modal-title mb-0">{user.name}</h3>
              <Badge variant="accent" size="sm">
                ID: #{user.id}
              </Badge>
            </div>
            <p className="user-modal-username">@{user.username}</p>
          </div>
        </div>

        <div className="modal-body">
          {/* Company Section */}
          <div className="user-modal-section">
            <h4 className="modal-section-title">
              <Icon name="building" size={16} /> კომპანია
            </h4>
            <div className="user-modal-box">
              <div className="user-modal-box-item">
                <span className="user-modal-label">დასახელება:</span>
                <span className="user-modal-value font-semibold">{user.company.name}</span>
              </div>
              <div className="user-modal-box-item">
                <span className="user-modal-label">სლოგანი:</span>
                <span className="user-modal-value italic">"{user.company.catchPhrase}"</span>
              </div>
              <div className="user-modal-box-item">
                <span className="user-modal-label">საქმიანობა:</span>
                <span className="user-modal-value">{user.company.bs}</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="user-modal-section">
            <h4 className="modal-section-title">
              <Icon name="mail" size={16} /> საკონტაქტო ინფორმაცია
            </h4>
            <div className="user-modal-grid">
              <div className="user-modal-info-card">
                <span className="user-modal-label">ელ-ფოსტა</span>
                <a href={`mailto:${user.email}`} className="user-modal-link">
                  {user.email}
                </a>
              </div>
              <div className="user-modal-info-card">
                <span className="user-modal-label">ტელეფონი</span>
                <a href={`tel:${user.phone}`} className="user-modal-link">
                  {user.phone}
                </a>
              </div>
              <div className="user-modal-info-card">
                <span className="user-modal-label">ვებსაიტი</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-modal-link"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="user-modal-section">
            <h4 className="modal-section-title">
              <Icon name="map-pin" size={16} /> მისამართი და ლოკაცია
            </h4>
            <div className="user-modal-box">
              <div className="user-modal-box-item">
                <span className="user-modal-label">ქალაქი:</span>
                <span className="user-modal-value">{user.address.city}</span>
              </div>
              <div className="user-modal-box-item">
                <span className="user-modal-label">ქუჩა / ბინა:</span>
                <span className="user-modal-value">{user.address.street}, {user.address.suite}</span>
              </div>
              <div className="user-modal-box-item">
                <span className="user-modal-label">საფოსტო ინდექსი:</span>
                <span className="user-modal-value">{user.address.zipcode}</span>
              </div>
              <div className="user-modal-box-item">
                <span className="user-modal-label">კოორდინატები (Geo):</span>
                <span className="user-modal-value font-mono">
                  {user.address.geo.lat}, {user.address.geo.lng}
                </span>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <Button
              href={`mailto:${user.email}`}
              variant="primary"
              size="md"
              icon={<Icon name="mail" size={16} />}
              iconPosition="left"
            >
              ელ-ფოსტის მიწერა
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={onClose}
            >
              დახურვა
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

