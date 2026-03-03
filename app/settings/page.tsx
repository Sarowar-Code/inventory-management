'use client'

import { Bell, CreditCard, Lock, Store, User } from 'lucide-react'
import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { Select } from '../../components/ui/Select'

export default function SettingsPage() {
  const [userRole, setUserRole] = useState('Admin')
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6 h-full overflow-auto">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-1 md:mb-2">Settings</h1>
        <p className="text-xs sm:text-sm text-slate-400">Manage your store and account settings</p>
      </div>

      {/* Account Settings */}
      <Card className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-slate-100">Account Settings</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Manage your account information</p>
          </div>
          <User className="text-deepblue-400 flex-shrink-0" size={20} />
        </div>

        <div className="space-y-3 md:space-y-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="admin@retailhub.ae"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <Select
              label="User Role"
              options={[
                { value: 'Admin', label: 'Admin' },
                { value: 'Cashier', label: 'Cashier' },
                { value: 'Manager', label: 'Manager' }
              ]}
              value={userRole}
              onChange={setUserRole}
              placeholder="Select a role"
            />
          </div>

          <button className="w-full py-2 border-2 border-deepblue-600 text-deepblue-400 rounded-lg font-semibold hover:bg-deepblue-600/10 mt-4 text-sm md:text-base transition">
            Save Changes
          </button>
        </div>
      </Card>

      {/* Store Settings */}
      <Card className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-slate-100">Store Settings</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Configure your store information</p>
          </div>
          <Store className="text-deepblue-400 flex-shrink-0" size={20} />
        </div>

        <div className="space-y-3 md:space-y-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Store Name</label>
            <input
              type="text"
              defaultValue="RetailHub Dubai"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Store Address</label>
            <input
              type="text"
              defaultValue="Dubai Mall, Dubai, UAE"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Store Logo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+971 4 308 8888"
                className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">VAT Rate (%)</label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
              />
            </div>
          </div>

          <button className="w-full py-2 border-2 border-deepblue-600 text-deepblue-400 rounded-lg font-semibold hover:bg-deepblue-600/10 mt-4 text-sm md:text-base transition">
            Save Changes
          </button>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-slate-100">Security</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Manage password and security settings</p>
          </div>
          <Lock className="text-deepblue-400 flex-shrink-0" size={20} />
        </div>

        <div className="space-y-3 md:space-y-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
            />
          </div>

          <button className="w-full py-2 border-2 border-deepblue-600 text-deepblue-400 rounded-lg font-semibold hover:bg-deepblue-600/10 mt-4 text-sm md:text-base transition">
            Update Password
          </button>
        </div>
      </Card>

      {/* Payment Settings */}
      <Card className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-slate-100">Payment Methods</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Configure payment gateway settings</p>
          </div>
          <CreditCard className="text-deepblue-400 flex-shrink-0" size={20} />
        </div>

        <div className="space-y-2 md:space-y-3">
          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Credit/Debit Card</span>
          </label>

          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Cash Payment</span>
          </label>

          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Bank Transfer / UPI</span>
          </label>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-slate-100">Notifications</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Manage notification preferences</p>
          </div>
          <Bell className="text-deepblue-400 flex-shrink-0" size={20} />
        </div>

        <div className="space-y-2 md:space-y-3">
          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Low Stock Alerts</span>
          </label>

          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Daily Sales Summary</span>
          </label>

          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">System Alerts</span>
          </label>

          <label className="flex items-center p-3 md:p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition">
            <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
            <span className="ml-3 text-slate-300 text-sm md:text-base">Transaction Notifications</span>
          </label>
        </div>
      </Card>
    </div>
  )
}
