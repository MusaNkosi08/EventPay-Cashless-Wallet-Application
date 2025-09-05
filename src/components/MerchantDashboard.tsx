import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Clock, Download, QrCode, Store } from 'lucide-react';

export function MerchantDashboard() {
  const [merchantData] = useState({
    businessName: 'Burger Barn',
    totalSales: 12450.75,
    transactionCount: 287,
    avgTransaction: 43.38,
    pendingSettlement: 1250.00,
    settled: 11200.75
  });

  const salesData = [
    { time: '10:00', sales: 150 },
    { time: '11:00', sales: 280 },
    { time: '12:00', sales: 420 },
    { time: '13:00', sales: 650 },
    { time: '14:00', sales: 580 },
    { time: '15:00', sales: 720 },
    { time: '16:00', sales: 890 },
    { time: '17:00', sales: 1100 },
    { time: '18:00', sales: 950 },
    { time: '19:00', sales: 1150 },
    { time: '20:00', sales: 980 },
    { time: '21:00', sales: 750 }
  ];

  const recentTransactions = [
    { id: 'TXN-001', customer: 'Customer #4521', amount: 85.50, item: '2x Gourmet Burger + Fries', time: '14:32' },
    { id: 'TXN-002', customer: 'Customer #4520', amount: 45.00, item: 'Bacon Burger + Drink', time: '14:28' },
    { id: 'TXN-003', customer: 'Customer #4519', amount: 120.00, item: '3x Burgers + Sides', time: '14:25' },
    { id: 'TXN-004', customer: 'Customer #4518', amount: 65.50, item: 'Premium Burger Combo', time: '14:22' }
  ];

  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-groove-gradient p-2 rounded-lg">
            <Store className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-groove-purple">Merchant Dashboard</h1>
            <p className="text-sm text-gray-600">{merchantData.businessName} • GroovePay</p>
          </div>
        </div>
        <Badge className="bg-green-100 text-green-800 border-green-200">
          <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Live
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-green-500 p-1.5 rounded-lg">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs text-green-700">Total Sales</span>
          </div>
          <p className="text-lg font-bold text-green-800">R {merchantData.totalSales.toLocaleString()}</p>
          <p className="text-xs text-green-600">+12% vs yesterday</p>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <Users className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs text-blue-700">Transactions</span>
          </div>
          <p className="text-lg font-bold text-blue-800">{merchantData.transactionCount}</p>
          <p className="text-xs text-blue-600">Avg: R{merchantData.avgTransaction.toFixed(2)}</p>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs text-orange-700">Pending</span>
          </div>
          <p className="text-lg font-bold text-orange-800">R {merchantData.pendingSettlement.toLocaleString()}</p>
          <p className="text-xs text-orange-600">Settlement due</p>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-purple-500 p-1.5 rounded-lg">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs text-purple-700">Settled</span>
          </div>
          <p className="text-lg font-bold text-purple-800">R {merchantData.settled.toLocaleString()}</p>
          <p className="text-xs text-purple-600">This event</p>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="p-6 mb-6 border-2 border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-groove-purple">Sales Today</h2>
          <Button variant="outline" size="sm" className="border-groove-purple hover:bg-purple-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Line type="monotone" dataKey="sales" stroke="url(#gradient)" strokeWidth={3} />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Tabs for Details */}
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="transactions" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">Recent</TabsTrigger>
          <TabsTrigger value="settlement" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">Settlement</TabsTrigger>
          <TabsTrigger value="qr" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">QR Code</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-6">
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <Card key={transaction.id} className={`p-4 border-2 transition-all duration-200 hover:shadow-lg ${
                index % 3 === 0 ? 'border-green-200 hover:border-green-300' :
                index % 3 === 1 ? 'border-blue-200 hover:border-blue-300' :
                'border-purple-200 hover:border-purple-300'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium">{transaction.customer}</p>
                    <p className="text-xs text-gray-600">{transaction.item}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">R {transaction.amount.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{transaction.time}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                  Completed
                </Badge>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settlement" className="mt-6">
          <Card className="p-6 mb-4 border-2 border-blue-200">
            <h3 className="mb-4 text-blue-800">Settlement Schedule</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <div>
                  <p className="text-sm font-medium text-blue-800">Next Settlement</p>
                  <p className="text-xs text-blue-600">Tomorrow 9:00 AM</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-800">R 1,250.00</p>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <div>
                  <p className="text-sm font-medium text-blue-800">Yesterday Settlement</p>
                  <p className="text-xs text-blue-600">Dec 14, 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-800">R 2,450.75</p>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
            <h4 className="text-blue-800 text-sm mb-2">Settlement Terms</h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Daily settlements at 9:00 AM</li>
              <li>• Instant settlement available</li>
              <li>• 2.5% processing fee</li>
              <li>• Real-time transaction tracking</li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="qr" className="mt-6">
          <Card className="p-6 text-center border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="bg-white p-6 rounded-2xl border-4 border-dashed border-purple-300 mb-4">
              <QrCode className="h-24 w-24 mx-auto text-purple-600" />
            </div>
            <h3 className="mb-2 text-purple-800">Your Payment QR Code</h3>
            <p className="text-sm text-purple-700 mb-4">
              Customers scan this code to pay with GroovePay
            </p>
            <div className="bg-white/60 p-4 rounded-lg mb-4 border border-purple-200">
              <p className="text-xs text-purple-700">Merchant ID:</p>
              <p className="font-mono text-purple-800">BURGER-BARN-001</p>
            </div>
            <Button className="w-full bg-groove-gradient hover:opacity-90 shadow-lg">
              <Download className="h-4 w-4 mr-2" />
              Download QR Code
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}