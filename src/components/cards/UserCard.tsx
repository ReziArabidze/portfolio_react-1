import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import type { User } from '../../types';

interface UserCardProps {
  user: User;
  onSelect?: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onSelect }) => {
  // Generate initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Avatar gradient based on id
  const avatarGradients = [
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
  ];
  const gradient = avatarGradients[(user.id - 1) % avatarGradients.length];

  return (
    <Card
      className="user-card"
      hoverable={true}
      onClick={onSelect ? () => onSelect(user) : undefined}
    >
      <div className="user-card-header">
        <div className="user-avatar" style={{ background: gradient }}>
          {getInitials(user.name)}
        </div>
        <div className="user-header-info">
          <h3 className="user-name">{user.name}</h3>
          <span className="user-username">@{user.username}</span>
        </div>
        <Badge variant="accent" size="sm" className="user-id-badge">
          #{user.id}
        </Badge>
      </div>

      <div className="user-company-banner">
        <Icon name="building" size={15} className="user-company-icon" />
        <span className="user-company-name">{user.company.name}</span>
      </div>
      <p className="user-company-phrase">"{user.company.catchPhrase}"</p>

      <div className="user-details-list">
        <div className="user-detail-item">
          <Icon name="mail" size={15} />
          <a
            href={`mailto:${user.email}`}
            className="user-detail-link"
            onClick={(e) => e.stopPropagation()}
            title="გაგზავნეთ მეილი"
          >
            {user.email}
          </a>
        </div>

        <div className="user-detail-item">
          <Icon name="phone" size={15} />
          <a
            href={`tel:${user.phone}`}
            className="user-detail-link"
            onClick={(e) => e.stopPropagation()}
            title="დარეკეთ"
          >
            {user.phone}
          </a>
        </div>

        <div className="user-detail-item">
          <Icon name="map-pin" size={15} />
          <span>{user.address.city}, {user.address.street}</span>
        </div>

        <div className="user-detail-item">
          <Icon name="globe" size={15} />
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="user-detail-link"
            onClick={(e) => e.stopPropagation()}
          >
            {user.website}
          </a>
        </div>
      </div>

      <div className="user-card-footer" onClick={(e) => e.stopPropagation()}>
        {onSelect && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSelect(user)}
            icon={<Icon name="user" size={15} />}
            iconPosition="left"
            className="w-full"
          >
            სრული პროფილი
          </Button>
        )}
      </div>
    </Card>
  );
};

