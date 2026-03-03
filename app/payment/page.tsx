'use client'
import { ArrowLeft, Check, CreditCard } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

function PaymentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()nt'
import { ArrowLeft, Check, CreditCard } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const total = searchParams.get('total') || '0.00'
  const itemCount = searchParams.get('items') || '0'

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'upi'>('card')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCVC, setCardCVC] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()

    if (paymentMethod === 'card' && (!cardNumber || !cardName || !cardExpiry || !cardCVC)) {
      alert('Please fill in all card details')
      return
    }

    setIsProcessing(true)

    // Simulate payment processing (2 second delay)
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
      setTransactionId('TXN' + Math.random().toString(36).substring(2, 11).toUpperCase())
    }, 2000)
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-600/20 border border-green-600 rounded-full flex items-center justify-center animate-pulse">
                <Check className="text-green-400" size={32} />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-100 mb-2">Payment Successful!</h1>
            <p className="text-slate-400 mb-6">Thank you for your purchase</p>

            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex justify-between text-slate-300 mb-3">
                <span>Transaction ID:</span>
                <span className="font-mono text-deepblue-400 font-semibold">{transactionId}</span>
              </div>
              <div className="flex justify-between text-slate-300 mb-3">
                <span>Items:</span>
                <span className="font-semibold">{itemCount}</span>
              </div>
              <div className="border-t border-slate-700 pt-3 flex justify-between text-slate-100">
                <span className="font-semibold">Total Paid:</span>
                <span className="text-deepblue-400 font-bold">AED {total}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/pos" className="block">
                <button className="w-full py-3 bg-deepblue-600 text-white rounded-lg font-semibold hover:bg-deepblue-700">
                  New Transaction
                </button>
              </Link>
              <Link href="/" className="block">
                <button className="w-full py-3 bg-slate-800 text-slate-100 rounded-lg font-semibold hover:bg-slate-700">
                  Go to Dashboard
                </button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 mt-4">Receipt will be printed automatically</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link href="/pos" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-6">
          <ArrowLeft size={16} />
          <span>Back to POS</span>
        </Link>

        <div className="grid grid-cols-3 gap-6">
          {/* Payment Form */}
          <div className="col-span-2">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h1 className="text-2xl font-bold text-slate-100 mb-6">Payment Checkout</h1>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-100 mb-3">Select Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800" style={{ borderColor: paymentMethod === 'card' ? '#0066d6' : undefined, backgroundColor: paymentMethod === 'card' ? 'rgba(0, 102, 214, 0.1)' : undefined }}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <CreditCard size={20} className="ml-3 text-deepblue-400" />
                    <span className="ml-3 text-slate-100 font-medium">Credit/Debit Card</span>
                  </label>

                  <label className="flex items-center p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800" style={{ borderColor: paymentMethod === 'cash' ? '#0066d6' : undefined, backgroundColor: paymentMethod === 'cash' ? 'rgba(0, 102, 214, 0.1)' : undefined }}>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 text-slate-100 font-medium">Cash</span>
                  </label>

                  <label className="flex items-center p-4 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800" style={{ borderColor: paymentMethod === 'upi' ? '#0066d6' : undefined, backgroundColor: paymentMethod === 'upi' ? 'rgba(0, 102, 214, 0.1)' : undefined }}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 text-slate-100 font-medium">Bank Transfer / UPI</span>
                  </label>
                </div>
              </div>

              {/* Card Form */}
              {paymentMethod === 'card' && (
                <form onSubmit={handlePayment}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').slice(0, 16))}
                        maxLength={19}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value.slice(0, 5))}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardCVC}
                          onChange={(e) => setCardCVC(e.target.value.slice(0, 3))}
                          maxLength={3}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-deepblue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3 border-2 border-deepblue-600 text-gray-400 rounded-lg font-semibold hover:bg-deepblue-600/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing Payment...' : 'Complete Payment'}
                  </button>
                </form>
              )}

              {paymentMethod === 'cash' && (
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-3 border-2 border-deepblue-600 text-deepblue-400 rounded-lg font-semibold hover:bg-deepblue-600/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Confirm Cash Payment'}
                </button>
              )}

              {paymentMethod === 'upi' && (
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-3 border-2 border-deepblue-600 text-deepblue-400 rounded-lg font-semibold hover:bg-deepblue-600/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Proceed with Bank Transfer'}
                </button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-slate-100 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-slate-300">
                  <span>Items:</span>
                  <span className="font-semibold">{itemCount}</span>
                </div>
                <div className="border-t border-slate-700 pt-3 flex justify-between text-slate-100">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-deepblue-400 text-xl font-bold">AED {total}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">This is a demo payment page for testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-300">Loading payment page...</div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
