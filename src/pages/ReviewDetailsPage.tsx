import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, ArrowLeft, CreditCard } from 'lucide-react';

const ReviewDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  if (!bookingData) {
    navigate('/');
    return null;
  }

  const subtotal = parseInt(bookingData.fee);
  const bookingAmount = 10000;
  const convenienceFee = 500;
  const totalToPay = bookingAmount + convenienceFee;

  const handleMakePayment = () => {
    navigate('/booking/confirmed', { state: bookingData });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Details
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Review Your Booking
            </h1>

            {/* Personal Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Name:</span> {bookingData.firstName} {bookingData.lastName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Contact:</span> {bookingData.phone}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {bookingData.email}
                </p>
              </div>
            </div>

            {/* Booking Details */}
            <div className="mb-8">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 rounded-lg p-3">
                    <Building2 className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{bookingData.hostelName}</h3>
                    <p className="text-gray-600">{bookingData.roomType}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">₹{subtotal.toLocaleString()}</span>
                  <p className="text-sm text-gray-600">per year</p>
                </div>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Subtotal:</span>
                  <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Booking amount:</span>
                  <span className="text-gray-900">₹{bookingAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Convenience fee:</span>
                  <span className="text-gray-900">₹{convenienceFee}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total you have to pay now:</span>
                  <span className="text-2xl font-bold text-indigo-600">₹{totalToPay.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Only the booking amount will be deducted from your total hostel fee. 
                The convenience fee is separate and helps us maintain our platform.
              </p>
            </div>

            {/* Payment Button */}
            <div className="text-center">
              <button
                onClick={handleMakePayment}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
              >
                <CreditCard className="h-5 w-5" />
                <span>Make Payment</span>
              </button>
              <p className="text-xs text-gray-500 mt-4">
                Your payment is secured with 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReviewDetailsPage;