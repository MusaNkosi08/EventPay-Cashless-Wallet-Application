import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowUpRight, ArrowDownLeft, RotateCcw, Filter, History } from 'lucide-react';

export function TransactionHistory() {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const transactions = [
    {
      id: 'TXN-1701234567',
      type: 'payment',
      merchant: 'Burger Barn',
      item: '2x Gourmet Burger + Fries',
      amount: -85.50,
      status: 'completed',
      date: '2024-12-15T14:30:00',
      location: 'Food Court A'
    },
    {
      id: 'TXN-1701234566',
      type: 'payment',
      merchant: 'Festival Merch',
      item: 'Spring Festival T-Shirt',
      amount: -120.00,
      status: 'completed',
      date: '2024-12-15T12:15:00',
      location: 'Merchandise Tent'
    },
    {
      id: 'TXN-1701234565',
      type: 'topup',
      merchant: 'GroovePay',
      item: 'Wallet Top-up',
      amount: 500.00,
      status: 'completed',
      date: '2024-12-15T10:00:00',
      location: 'Mobile App'
    },
    {
      id: 'TXN-1701234564',
      type: 'payment',
      merchant: 'Craft Beer Corner',
      item: '3x Local Craft Beer',
      amount: -95.00,
      status: 'completed',
      date: '2024-12-14T19:45:00',
      location: 'Beverage Area'
    },
    {
      id: 'REFUND-PENDING',
      type: 'refund',
      merchant: 'GroovePay Auto-Refund',
      item: 'Unused balance refund',
      amount: 245.25,
      status: 'pending',
      date: '2024-12-18T00:00:00',
      location: 'Automatic'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const getTransactionIcon = (type, amount) => {
    if (type === 'refund') return <RotateCcw className="h-4 w-4 text-green-600" />;
    if (amount > 0) return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
    return <ArrowUpRight className="h-4 w-4 text-red-600" />;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 animate-pulse">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-groove-gradient p-2 rounded-lg">
            <History className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-groove-purple">Transaction History</h1>
            <p className="text-xs text-gray-600">GroovePay Activity</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="border-groove-purple hover:bg-purple-50">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
          <p className="text-xs text-red-700 mb-1">Total Spent</p>
          <p className="text-lg text-red-600 font-bold">-R 300.50</p>
          <p className="text-xs text-red-600">This event</p>
        </Card>
        <Card className="p-4 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
          <p className="text-xs text-green-700 mb-1">Pending Refund</p>
          <p className="text-lg text-green-600 font-bold">+R 245.25</p>
          <p className="text-xs text-green-600">Auto-refund</p>
        </Card>
      </div>

      {/* Transaction Tabs */}
      <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="all" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">All</TabsTrigger>
          <TabsTrigger value="payments" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">Payments</TabsTrigger>
          <TabsTrigger value="refunds" className="data-[state=active]:bg-groove-gradient data-[state=active]:text-white">Refunds</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <Card key={transaction.id} className={`p-4 border-2 transition-all duration-200 hover:shadow-lg ${
                index % 3 === 0 ? 'border-purple-200 hover:border-purple-300' :
                index % 3 === 1 ? 'border-pink-200 hover:border-pink-300' :
                'border-orange-200 hover:border-orange-300'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      transaction.type === 'refund' ? 'bg-green-100' :
                      transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {getTransactionIcon(transaction.type, transaction.amount)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.merchant}</p>
                      <p className="text-xs text-gray-600">{transaction.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}R {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{transaction.location}</span>
                  <span>{formatDate(transaction.date)}</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments" className="mt-6">
          <div className="space-y-3">
            {transactions.filter(t => t.type === 'payment' || t.type === 'topup').map((transaction, index) => (
              <Card key={transaction.id} className={`p-4 border-2 transition-all duration-200 hover:shadow-lg ${
                index % 2 === 0 ? 'border-blue-200 hover:border-blue-300' : 'border-cyan-200 hover:border-cyan-300'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                      {getTransactionIcon(transaction.type, transaction.amount)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.merchant}</p>
                      <p className="text-xs text-gray-600">{transaction.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}R {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{transaction.location}</span>
                  <span>{formatDate(transaction.date)}</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="refunds" className="mt-6">
          <div className="space-y-3">
            {transactions.filter(t => t.type === 'refund').map((transaction) => (
              <Card key={transaction.id} className="p-4 border-2 border-green-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      {getTransactionIcon(transaction.type, transaction.amount)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.merchant}</p>
                      <p className="text-xs text-gray-600">{transaction.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">
                      +R {transaction.amount.toFixed(2)}
                    </p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{transaction.location}</span>
                  <span>{formatDate(transaction.date)}</span>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-4 mt-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
            <h3 className="text-blue-800 text-sm mb-2">Auto-Refund Information</h3>
            <p className="text-xs text-blue-700 mb-2">
              Your unused balance will be automatically refunded 24 hours after the event ends.
            </p>
            <p className="text-xs text-blue-600 font-medium">
              Refund processing: Dec 18, 2024 at 12:00 AM
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}