import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Plus, ArrowUpRight, Wallet, CreditCard, Sparkles } from 'lucide-react';

export function WalletSection() {
  const [balance] = useState(450.75);
  const [topUpAmount, setTopUpAmount] = useState('');

  const quickAmounts = [50, 100, 200, 500];

  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-groove-purple">My Wallet</h1>
          <p className="text-sm text-gray-600">GroovePay Balance</p>
        </div>
        <Badge className="bg-green-100 text-green-800 border-green-200">
          <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Active
        </Badge>
      </div>

      {/* Balance Card */}
      <Card className="p-6 mb-6 bg-groove-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="text-sm opacity-90">GroovePay Balance</span>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-75">ZAR Stablecoin</p>
              <Sparkles className="h-4 w-4 inline-block ml-1 opacity-80" />
            </div>
          </div>
          
          <div className="text-3xl mb-2 font-bold">R {balance.toFixed(2)}</div>
          <p className="text-xs opacity-75">Available for spending</p>
          
          <div className="flex items-center space-x-2 mt-4 bg-white/10 rounded-lg p-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs opacity-90">Connected to Spring Festival 2024</span>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button variant="outline" className="h-16 flex flex-col items-center justify-center border-groove-purple hover:bg-purple-50 transition-all duration-200">
          <div className="bg-groove-gradient p-2 rounded-full mb-1">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
          <span className="text-xs text-groove-purple">Send Money</span>
        </Button>
        <Button variant="outline" className="h-16 flex flex-col items-center justify-center border-groove-pink hover:bg-pink-50 transition-all duration-200">
          <div className="bg-groove-gradient-alt p-2 rounded-full mb-1">
            <CreditCard className="h-4 w-4 text-white" />
          </div>
          <span className="text-xs text-groove-pink">Cards & Banks</span>
        </Button>
      </div>

      {/* Top Up Section */}
      <Card className="p-6 mb-6 border-2 border-gray-100 hover:border-groove-purple/30 transition-all duration-200">
        <h2 className="mb-4 text-groove-purple">Top Up Wallet</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm mb-2 block text-gray-700">Amount (ZAR)</label>
            <Input
              type="number"
              placeholder="0.00"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
              className="text-lg border-2 focus:border-groove-purple"
            />
          </div>

          <div>
            <p className="text-sm mb-3 text-gray-700">Quick amounts:</p>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((amount, index) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  onClick={() => setTopUpAmount(amount.toString())}
                  className={`text-xs border-2 hover:bg-gradient-to-r hover:text-white transition-all duration-200 ${
                    index === 0 ? 'hover:from-purple-500 hover:to-pink-500 hover:border-purple-400' :
                    index === 1 ? 'hover:from-pink-500 hover:to-orange-500 hover:border-pink-400' :
                    index === 2 ? 'hover:from-orange-500 hover:to-yellow-500 hover:border-orange-400' :
                    'hover:from-green-500 hover:to-blue-500 hover:border-green-400'
                  }`}
                >
                  R{amount}
                </Button>
              ))}
            </div>
          </div>

          <Button className="w-full bg-groove-gradient hover:opacity-90 transition-all duration-200 shadow-lg">
            <Plus className="h-4 w-4 mr-2" />
            Add R{topUpAmount || '0.00'}
          </Button>
        </div>
      </Card>

      {/* Current Event Info */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <h3 className="text-blue-800">Spring Festival 2024</h3>
        </div>
        <p className="text-xs text-blue-700 mb-3">
          Dec 15-17, 2024 • Johannesburg
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-blue-700">Event ends in:</span>
            <span className="text-blue-800 font-medium">2 days, 14 hours</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-blue-700">Auto-refund:</span>
            <span className="text-blue-800 font-medium">Dec 18, 2024</span>
          </div>
        </div>
      </Card>
    </div>
  );
}