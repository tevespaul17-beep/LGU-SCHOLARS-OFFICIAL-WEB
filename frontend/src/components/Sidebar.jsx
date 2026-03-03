import React, { useState } from 'react';
import {
  Home,
  Users,
  QrCode,
  MapPin,
  Bell,
  FileText,
  ClipboardList,
  MessageCircle,
  LogOut
} from 'lucide-react';

const items = [
  { key: 'dashboard', label: 'Home', icon: Home },
  { key: 'masterlist', label: 'Masterlist', icon: Users },
  { key: 'scanner', label: 'Scanner', icon: QrCode },
  { key: 'overview', label: 'Overview', icon: MapPin },
  { key: 'announcements', label: 'Announcements and Updates', icon: Bell },
  { key: 'service', label: 'Community Service Status', icon: ClipboardList },
  { key: 'documents', label: 'Documents', icon: FileText },
  { key: 'concerns', label: 'Concerns', icon: MessageCircle },
];

const Sidebar = ({ current, onNavigate }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`flex flex-col transition-all duration-200 bg-[var(--deep-blue)] text-white ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <button
        className="p-4 focus:outline-none md:hidden"
        onClick={() => setCollapsed(!collapsed)}
      >
        &#9776;
      </button>
      <nav className="flex-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = current === item.key;
          return (
            <div
              key={item.key}
              className={`flex items-center p-3 cursor-pointer relative hover:bg-[var(--light-blue)]/40 ${
                active ? 'bg-[var(--light-blue)]/60' : ''
              }`}
              onClick={() => onNavigate(item.key)}
            >
              <Icon className="w-5 h-5 mr-3" />
              {!collapsed && <span className="text-white">{item.label}</span>}
            </div>
          );
        })}
      </nav>
      <div className="p-3">
        <button className="w-full flex items-center text-red-600">
          <LogOut className="w-5 h-5 mr-2" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
