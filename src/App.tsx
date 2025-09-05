import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { WalletSection } from './components/WalletSection';
import { PaymentScanner } from './components/PaymentScanner';
import { TransactionHistory } from './components/TransactionHistory';
import { MerchantDashboard } from './components/MerchantDashboard';
import { EventManagement } from './components/EventManagement';
import { LandingHero } from './components/LandingHero';
import { Wallet, QrCode, History, Store, Calendar, Home } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Mobile App Interface */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
        <Tabs value={currentSection} onValueChange={setCurrentSection} className="w-full">
          <div className="flex-1">
            <TabsContent value="home" className="mt-0">
              <LandingHero onGetStarted={() => setCurrentSection('wallet')} />
            </TabsContent>
            
            <TabsContent value="wallet" className="mt-0">
              <WalletSection />
            </TabsContent>
            
            <TabsContent value="scanner" className="mt-0">
              <PaymentScanner />
            </TabsContent>
            
            <TabsContent value="history" className="mt-0">
              <TransactionHistory />
            </TabsContent>
            
            <TabsContent value="merchant" className="mt-0">
              <MerchantDashboard />
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <EventManagement />
            </TabsContent>
          </div>

          {/* Bottom Navigation */}
          <TabsList className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md h-16 bg-white/95 backdrop-blur-sm border-t rounded-none grid grid-cols-5 shadow-lg">
            <TabsTrigger value="home" className="flex flex-col items-center justify-center h-full data-[state=active]:bg-groove-gradient data-[state=active]:text-white transition-all duration-200">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex flex-col items-center justify-center h-full data-[state=active]:bg-groove-gradient data-[state=active]:text-white transition-all duration-200">
              <Wallet className="h-5 w-5" />
              <span className="text-xs mt-1">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="scanner" className="flex flex-col items-center justify-center h-full data-[state=active]:bg-groove-gradient data-[state=active]:text-white transition-all duration-200">
              <QrCode className="h-5 w-5" />
              <span className="text-xs mt-1">Pay</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex flex-col items-center justify-center h-full data-[state=active]:bg-groove-gradient data-[state=active]:text-white transition-all duration-200">
              <History className="h-5 w-5" />
              <span className="text-xs mt-1">History</span>
            </TabsTrigger>
            <TabsTrigger value="merchant" className="flex flex-col items-center justify-center h-full data-[state=active]:bg-groove-gradient data-[state=active]:text-white transition-all duration-200">
              <Store className="h-5 w-5" />
              <span className="text-xs mt-1">Merchant</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}