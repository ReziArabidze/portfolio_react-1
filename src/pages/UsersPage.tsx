import React, { useState, useEffect, useMemo } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { UserCard } from '../components/cards/UserCard';
import { UserModal } from '../components/common/UserModal';
import { Button } from '../components/common/Button';
import { Icon } from '../components/common/Icon';
import type { User } from '../types';

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'id' | 'name-asc' | 'name-desc' | 'city'>('id');
  const [selectedCompany, setSelectedCompany] = useState<string>('ყველა');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error(`სერვერის შეცდომა: ${res.status}`);
      }
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა');
      } else {
        setError('უცნობი შეცდომა მონაცემების მიღებისას');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    const initialFetch = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error(`სერვერის შეცდომა: ${res.status}`);
        }
        const data: User[] = await res.json();
        if (!ignore) {
          setUsers(data);
        }
      } catch (err: unknown) {
        if (!ignore) {
          if (err instanceof Error) {
            setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა');
          } else {
            setError('უცნობი შეცდომა მონაცემების მიღებისას');
          }
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    initialFetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      ignore = true;
    };
  }, []);

  const handleRefresh = () => {
    loadData();
  };

  // Unique companies list for filtering
  const companies = useMemo(() => {
    const list = Array.from(new Set(users.map((u) => u.company.name)));
    return ['ყველა', ...list];
  }, [users]);

  // Filtered and sorted users
  const filteredUsers = useMemo(() => {
    let result = users.filter((user) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        user.name.toLowerCase().includes(q) ||
        user.username.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.address.city.toLowerCase().includes(q) ||
        user.company.name.toLowerCase().includes(q);

      const matchesCompany =
        selectedCompany === 'ყველა' || user.company.name === selectedCompany;

      return matchesSearch && matchesCompany;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'city') {
        return a.address.city.localeCompare(b.address.city);
      }
      return a.id - b.id;
    });

    return result;
  }, [users, searchQuery, selectedCompany, sortBy]);

  return (
    <div className="users-page-wrapper">
      <div className="section-container">
        {/* Navigation Breadcrumb / Back button */}
        <div className="page-breadcrumb-nav">
          <a href="index.html" className="breadcrumb-back-btn">
            <Icon name="arrow-left" size={18} />
            <span>მთავარ გვერდზე დაბრუნება</span>
          </a>
          <div className="breadcrumb-pill">
            <span className="breadcrumb-dot"></span>
            REST API Data (JSONPlaceholder)
          </div>
        </div>

        {/* Page Section Title */}
        <SectionTitle
          badge="REST API ინტეგრაცია"
          title="მომხმარებელთა"
          highlight="კატალოგი"
          description="მონაცემები ჩატვირთულია https://jsonplaceholder.typicode.com/users-დან. გამოიყენეთ ძებნა და ფილტრები მომხმარებლების საპოვნელად."
        />

        {/* Stats strip */}
        <div className="users-stats-bar">
          <div className="user-stat-chip">
            <span className="user-stat-label">სულ მომხმარებელი:</span>
            <span className="user-stat-val">{users.length}</span>
          </div>
          <div className="user-stat-chip">
            <span className="user-stat-label">კომპანია:</span>
            <span className="user-stat-val">{companies.length - 1}</span>
          </div>
          <div className="user-stat-chip">
            <span className="user-stat-label">ნაპოვნია შედეგი:</span>
            <span className="user-stat-val font-semibold text-primary">
              {filteredUsers.length}
            </span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="users-search-toolbar">
          <div className="search-input-wrapper">
            <Icon name="search" size={20} className="search-input-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="მოძებნეთ სახელით, @username-ით, მეილით, ქალაქით ან კომპანიით..."
              className="search-input-field"
              aria-label="მომხმარებლის ძებნა"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="ძებნის გასუფთავება"
                title="გასუფთავება"
              >
                <Icon name="close" size={16} />
              </button>
            )}
          </div>

          <div className="users-filter-controls">
            {/* Sort Dropdown */}
            <div className="filter-control-item">
              <label htmlFor="user-sort" className="filter-label">დალაგება:</label>
              <select
                id="user-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="filter-select"
              >
                <option value="id">ID ზრდადობით</option>
                <option value="name-asc">სახელი (A - Z)</option>
                <option value="name-desc">სახელი (Z - A)</option>
                <option value="city">ქალაქი</option>
              </select>
            </div>

            {/* Refresh Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={handleRefresh}
              disabled={loading}
              icon={<Icon name="refresh" size={16} />}
              iconPosition="left"
              title="მონაცემების განახლება"
            >
              განახლება
            </Button>
          </div>
        </div>

        {/* Company Quick-Filter Chips */}
        {companies.length > 1 && (
          <div className="company-filter-chips">
            <span className="company-chips-title">კომპანია:</span>
            <div className="company-chips-list">
              {companies.map((comp) => (
                <button
                  key={comp}
                  type="button"
                  className={`company-chip ${selectedCompany === comp ? 'active' : ''}`}
                  onClick={() => setSelectedCompany(comp)}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content State: Loading, Error, Empty, or Users Grid */}
        {loading && (
          <div className="users-loading-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="user-skeleton-card">
                <div className="skeleton-avatar"></div>
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-subtitle"></div>
                <div className="skeleton-box"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="users-error-box">
            <div className="users-error-icon">⚠️</div>
            <h3 className="users-error-title">მონაცემების ჩატვირთვა ვერ მოხერხდა</h3>
            <p className="users-error-message">{error}</p>
            <Button
              variant="primary"
              size="md"
              onClick={handleRefresh}
              icon={<Icon name="refresh" size={16} />}
              iconPosition="left"
            >
              ხელახლა ცდა
            </Button>
          </div>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <div className="users-empty-box">
            <div className="users-empty-icon">
              <Icon name="search" size={40} />
            </div>
            <h3 className="users-empty-title">მომხმარებელი ვერ მოიძებნა</h3>
            <p className="users-empty-desc">
              ძებნის ფრაზაზე <strong>"{searchQuery}"</strong> შედეგი არ არის.
            </p>
            <div className="users-empty-actions">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCompany('ყველა');
                }}
              >
                ძებნის პარამეტრების გასუფთავება
              </Button>
            </div>
          </div>
        )}

        {!loading && !error && filteredUsers.length > 0 && (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onSelect={(u) => setSelectedUser(u)}
              />
            ))}
          </div>
        )}

        {/* Modal for viewing detailed user information */}
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      </div>
    </div>
  );
};
