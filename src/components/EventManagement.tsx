import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Calendar, Users, DollarSign, Store, MapPin, Clock, Plus, Sparkles } from 'lucide-react';

export function EventManagement() {
  const [currentEvent] = useState({
    name: 'Spring Festival 2024',
    location: 'Johannesburg Central Park',
    startDate: '2024-12-15',
    endDate: '2024-12-17',
    status: 'active',
    attendees: 15420,
    merchants: 48,
    totalSales: 892450.75,
    walletTopups: 650000.00,
    refundsPending: 125000.00
  });

  const eventStats = [
    { label: 'Total Attendees', value: '15,420', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { label: 'Active Merchants', value: '48', icon: Store, color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    { label: 'Total Sales', value: 'R 892K', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { label: 'Wallet Topups', value: 'R 650K', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' }
  ];

  const topMerchants = [
    { name: 'Burger Barn', sales: 45600.75, transactions: 432, color: 'bg-red-100 border-red-200' },
    { name: 'Craft Beer Corner', sales: 38950.50, transactions: 389, color: 'bg-orange-100 border-orange-200' },
    { name: 'Festival Merch', sales: 32100.25, transactions: 267, color: 'bg-yellow-100 border-yellow-200' },
    { name: 'Pizza Paradise', sales: 28750.00, transactions: 198, color: 'bg-green-100 border-green-200' },
    { name: 'Smoothie Station', sales: 22400.50, transactions: 356, color: 'bg-blue-100 border-blue-200' }
  ];

  const upcomingEvents = [
    { name: 'Summer Music Fest', date: '2024-12-28', location: 'Cape Town Stadium', color: 'bg-pink-50 border-pink-200' },
    { name: 'New Year Celebration', date: '2024-12-31', location: 'Durban Beachfront', color: 'bg-purple-50 border-purple-200' },
    { name: 'Jazz & Blues Weekend', date: '2025-01-15', location: 'Pretoria Arts Centre', color: 'bg-blue-50 border-blue-200' }
  ];

  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-groove-gradient p-2 rounded-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-groove-purple">Event Management</h1>
            <p className="text-sm text-gray-600">GroovePay Organizer Dashboard</p>
          </div>
        </div>
        <Button size="sm" className="bg-groove-gradient hover:opacity-90 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>

      {/* Current Event */}
      <Card className="p-6 mb-6 bg-groove-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-white/15 rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-xl">{currentEvent.name}</h2>
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex items-center space-x-4 text-sm opacity-90">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{currentEvent.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 15-17, 2024</span>
                </div>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Active
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs opacity-75">Days Remaining</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Event Progress</p>
              <div className="flex items-center space-x-2 mt-1">
                <Progress value={60} className="flex-1 bg-white/20" />
                <span className="text-sm">60%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Event Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {eventStats.map((stat, index) => (
          <Card key={index} className={`p-4 border-2 ${stat.bgColor} ${stat.borderColor}`}>
            <div className="flex items-center space-x-2 mb-2">
              <div className={`p-1.5 rounded-lg ${stat.color.replace('text-', 'bg-').replace('600', '500')}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
              <span className={`text-xs ${stat.color.replace('600', '700')}`}>{stat.label}</span>
            </div>
            <p className={`text-lg font-bold ${stat.color.replace('600', '800')}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Financial Overview */}
      <Card className="p-6 mb-6 border-2 border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <h2 className="mb-4 text-groove-purple">Financial Overview</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
            <span className="text-sm text-green-700">Total Wallet Topups</span>
            <span className="text-lg text-green-600 font-bold">+R {currentEvent.walletTopups.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
            <span className="text-sm text-blue-700">Total Sales (Merchants)</span>
            <span className="text-lg text-blue-600 font-bold">R {currentEvent.totalSales.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
            <span className="text-sm text-orange-700">Pending Refunds</span>
            <span className="text-lg text-orange-600 font-bold">-R {currentEvent.refundsPending.toLocaleString()}</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div>
                <span className="text-sm text-purple-700">Net Platform Revenue</span>
                <p className="text-xs text-purple-600 mt-1">2.5% platform fee</p>
              </div>
              <span className="text-lg text-purple-600 font-bold">R {(currentEvent.totalSales * 0.025).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Top Merchants */}
      <Card className="p-6 mb-6 border-2 border-gray-100">
        <h2 className="mb-4 text-groove-purple">Top Performing Merchants</h2>
        <div className="space-y-3">
          {topMerchants.map((merchant, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg border-2 ${merchant.color}`}>
              <div className="flex items-center space-x-3">
                <div className="bg-groove-gradient text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium">{merchant.name}</p>
                  <p className="text-xs text-gray-600">{merchant.transactions} transactions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">R {merchant.sales.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card className="p-6 border-2 border-gray-100">
        <h2 className="mb-4 text-groove-purple">Upcoming Events</h2>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className={`flex items-center justify-between p-3 border-2 rounded-lg ${event.color}`}>
              <div>
                <p className="text-sm font-medium">{event.name}</p>
                <p className="text-xs text-gray-600">{event.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{new Date(event.date).toLocaleDateString()}</p>
                <Badge variant="outline" className="text-xs">Planned</Badge>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 border-groove-purple hover:bg-purple-50">
          View All Events
        </Button>
      </Card>
    </div>
  );
}