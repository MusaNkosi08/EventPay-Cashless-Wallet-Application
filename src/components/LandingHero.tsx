import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Zap, Shield, Smartphone, TrendingUp, Music } from 'lucide-react';

interface LandingHeroProps {
  onGetStarted: () => void;
}

export function LandingHero({ onGetStarted }: LandingHeroProps) {
  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white/20 backdrop-blur-sm text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <div className="relative">
            <Music className="h-8 w-8" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Zap className="h-2 w-2 text-yellow-900" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl mb-2 font-bold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">GroovePay</h1>
        <p className="text-white/90 text-lg">Cashless Event & Festival Wallet</p>
        <div className="flex items-center justify-center space-x-2 mt-3">
          <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
          <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Problem Statement */}
      <Card className="p-6 mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <h2 className="text-red-200">The Problem</h2>
        </div>
        <p className="text-white/90 text-sm leading-relaxed">
          Long queues at festival stalls. Cash handling risks. Poor transaction tracking. 
          Merchants struggle with settlement and accounting.
        </p>
      </Card>

      {/* Solution */}
      <Card className="p-6 mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <h2 className="text-green-200">Our Solution</h2>
        </div>
        <p className="text-white/90 text-sm leading-relaxed">
          Preload ZAR stablecoin into your mobile wallet. Pay instantly with QR codes. 
          Get automatic refunds after events.
        </p>
      </Card>

      {/* Features */}
      <div className="space-y-4 mb-8">
        <h2 className="mb-4 text-yellow-200">Key Features</h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-yellow-900" />
            </div>
            <div>
              <h3 className="text-sm text-yellow-200">Lightning Fast Payments</h3>
              <p className="text-xs text-white/80">Buy tickets, food & drinks with QR scanning</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-start space-x-3">
            <div className="bg-green-400 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-green-900" />
            </div>
            <div>
              <h3 className="text-sm text-green-200">Auto Refunds</h3>
              <p className="text-xs text-white/80">Unused balance refunded automatically after events</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-400 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-900" />
            </div>
            <div>
              <h3 className="text-sm text-blue-200">Transparent Settlement</h3>
              <p className="text-xs text-white/80">Merchants get instant, clear transaction records</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact */}
      <Card className="p-6 mb-8 bg-white/15 backdrop-blur-sm border-white/30">
        <h2 className="text-yellow-200 mb-4">Impact</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-xs text-white/90">Faster Transactions</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-xs text-white/90">Less Cash Theft</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-xs text-white/90">Better Accounting</p>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <Button 
        onClick={onGetStarted}
        className="w-full h-12 bg-white text-purple-600 hover:bg-white/90 transition-all duration-200 shadow-lg"
        size="lg"
      >
        <span className="flex items-center space-x-2">
          <span>Get Started with GroovePay</span>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
        </span>
      </Button>

      <p className="text-xs text-white/70 text-center mt-4">
        Join thousands of festival-goers and merchants already grooving with GroovePay
      </p>
    </div>
  );
}