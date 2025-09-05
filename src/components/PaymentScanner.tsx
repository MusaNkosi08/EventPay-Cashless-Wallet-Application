import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { QrCode, Camera, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export function PaymentScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [manualCode, setManualCode] = useState('');

  // Simulate QR scan result
  useEffect(() => {
    if (isScanning) {
      const timer = setTimeout(() => {
        setPaymentDetails({
          merchant: 'Burger Barn',
          item: '2x Gourmet Burger + Fries',
          amount: 85.50,
          location: 'Food Court A - Stall 12'
        });
        setIsScanning(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isScanning]);

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentDetails({
        ...paymentDetails,
        status: 'completed',
        transactionId: 'TXN-' + Date.now()
      });
    }, 1500);
  };

  const simulateScan = () => {
    setIsScanning(true);
    setPaymentDetails(null);
  };

  return (
    <div className="p-6 pb-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="bg-groove-gradient p-2 rounded-lg">
            <QrCode className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-groove-purple">Payment Scanner</h1>
        </div>
        <p className="text-sm text-gray-600">Scan QR codes to pay instantly with GroovePay</p>
      </div>

      {/* Scanner Area */}
      <Card className="p-6 mb-6 border-2 border-gray-100">
        <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden border-4 border-dashed border-purple-300">
          {isScanning ? (
            <div className="text-center">
              <div className="animate-pulse">
                <div className="bg-groove-gradient p-4 rounded-full mb-4 shadow-lg">
                  <Camera className="h-12 w-12 text-white" />
                </div>
              </div>
              <p className="text-sm text-purple-700 mb-2">Scanning...</p>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-150"></div>
              </div>
              <div className="absolute inset-4 border-4 border-purple-400 rounded-2xl animate-pulse"></div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <QrCode className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">Position QR code in frame</p>
              <div className="flex justify-center space-x-1 mt-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        <Button 
          onClick={simulateScan}
          disabled={isScanning}
          className="w-full mb-4 bg-groove-gradient hover:opacity-90 transition-all duration-200 shadow-lg"
        >
          {isScanning ? (
            <span className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Scanning...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>Start Scanning</span>
            </span>
          )}
        </Button>

        {/* Manual Entry */}
        <div className="border-t pt-4">
          <p className="text-sm mb-2 text-gray-700">Or enter code manually:</p>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter merchant code"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              className="border-2 focus:border-groove-purple"
            />
            <Button variant="outline" className="border-groove-pink hover:bg-pink-50">Go</Button>
          </div>
        </div>
      </Card>

      {/* Payment Details */}
      {paymentDetails && !paymentDetails.status && (
        <Card className="p-6 mb-6 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-orange-800">Payment Details</h2>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 animate-pulse">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Pending
            </Badge>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-sm text-orange-700">Merchant:</span>
              <span className="text-sm font-medium text-orange-900">{paymentDetails.merchant}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-orange-700">Item:</span>
              <span className="text-sm font-medium text-orange-900">{paymentDetails.item}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-orange-700">Location:</span>
              <span className="text-sm font-medium text-orange-900">{paymentDetails.location}</span>
            </div>
            <div className="flex justify-between border-t border-orange-200 pt-3">
              <span className="text-orange-800">Total Amount:</span>
              <span className="text-lg font-bold text-orange-900">R {paymentDetails.amount.toFixed(2)}</span>
            </div>
          </div>

          <Button onClick={handlePayment} className="w-full bg-groove-gradient-alt hover:opacity-90 shadow-lg">
            <span className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Pay R {paymentDetails.amount.toFixed(2)}</span>
            </span>
          </Button>
        </Card>
      )}

      {/* Payment Success */}
      {paymentDetails?.status === 'completed' && (
        <Card className="p-6 bg-groove-success text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="relative z-10 text-center">
            <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h2 className="mb-2">Payment Successful!</h2>
            <p className="text-sm text-white/90 mb-4">
              R {paymentDetails.amount.toFixed(2)} paid to {paymentDetails.merchant}
            </p>
            <div className="bg-white/10 p-3 rounded-lg border border-white/20 mb-4">
              <p className="text-xs text-white/70">Transaction ID:</p>
              <p className="text-sm font-mono">{paymentDetails.transactionId}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setPaymentDetails(null)}
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              New Payment
            </Button>
          </div>
        </Card>
      )}

      {/* Balance Info */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-blue-700">Available Balance</p>
            <p className="text-lg text-blue-800 font-bold">R 450.75</p>
          </div>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Active
          </Badge>
        </div>
      </Card>
    </div>
  );
}