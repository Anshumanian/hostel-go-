import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Building2, Home, Mail, Phone } from 'lucide-react';

const BookingConfirmedPage: React.FC = () => {
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
  const totalPaid = bookingAmount + convenienceFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Success Icon */}
      <div className="flex justify-center pt-16 mb-8">
        <div className="bg-green-100 rounded-full p-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-green-800 font-medium">
            We have sent the confirmation and installment details to your email.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Booking Confirmed!
            </h1>

            {/* Personal Details */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">Name:</span>
                  <span className="ml-2">{bookingData.firstName} {bookingData.lastName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">Contact:</span>
                  <span className="ml-2">{bookingData.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">{bookingData.email}</span>
                </div>
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

            {/* Payment Summary */}
            <div className="mb-8">
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
                  <span className="text-lg font-bold text-gray-900">Amount paid:</span>
                  <span className="text-2xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-sm text-center">
                <strong>Important:</strong> Only the booking amount will be deducted from your total hostel fee. 
                The convenience fee is not deducted from it.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Check your email for detailed booking confirmation</li>
                <li>• Installment schedule has been sent to your email</li>
                <li>• Contact the hostel directly for move-in arrangements</li>
                <li>• Keep your booking confirmation for future reference</li>
              </ul>
            </div>

            {/* Return Home Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
              >
                <Home className="h-5 w-5" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingConfirmedPage;