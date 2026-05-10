import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CreditCard, Banknote, Building } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  devices: number;
  totalPrice: number;
}

export default function OrderModal({ isOpen, onClose, planName, devices, totalPrice }: OrderModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card' | 'crypto' | 'bank'>('paypal');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order the *${planName} Premium* plan.\n\n*Connections:* ${devices} Device(s)\n*Total:* $${totalPrice}\n*Payment Method:* ${paymentMethod.toUpperCase()}\n*Name:* ${name}\n*Email:* ${email}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/213554246175?text=${encodedMessage}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = `New Order: ${planName} Premium`;
    const body = `Hello, I want to order the ${planName} Premium plan.\n\nConnections: ${devices} Device(s)\nTotal: $${totalPrice}\nPayment Method: ${paymentMethod.toUpperCase()}\nName: ${name}\nEmail: ${email}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:support@iptv-worldcup.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-[380px] bg-[#0f1225] border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.15)] rounded-2xl overflow-hidden pointer-events-auto max-h-[95vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-5 pb-3 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center bg-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-xl font-black font-poppins text-white uppercase tracking-tight">
                  COMPLETE <span className="text-purple-400">YOUR ORDER</span>
                </h3>
                <p className="text-slate-400 text-[11px] mt-0.5">Fill in your details — activation is instant.</p>
              </div>

              {/* Body */}
              <div className="px-5 pb-5 space-y-4">
                
                {/* Summary */}
                <div className="bg-[#151932] border border-white/5 rounded-xl p-3.5 space-y-2.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-400 font-medium">Plan</span>
                    <span className="text-white font-bold">{planName} Premium</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-400 font-medium">Connections</span>
                    <span className="text-white font-bold">{devices} {devices === 1 ? 'Device' : 'Devices'}</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="text-slate-400 font-medium">Total</span>
                    <span className="text-xl font-black text-purple-400">${totalPrice}</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name" 
                      className="w-full bg-[#151932] border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com" 
                      className="w-full bg-[#151932] border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  
                  {/* Payment Method */}
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Payment Method</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button 
                        onClick={() => setPaymentMethod('paypal')}
                        className={`flex flex-col items-center justify-center py-2.5 rounded-lg border transition-all ${paymentMethod === 'paypal' ? 'bg-purple-600/20 border-purple-500' : 'bg-[#151932] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`font-black italic text-lg leading-none tracking-tighter ${paymentMethod === 'paypal' ? 'text-blue-400' : 'text-blue-500/70'}`}>P</span>
                        <span className={`text-[9px] font-bold mt-1 ${paymentMethod === 'paypal' ? 'text-purple-300' : 'text-slate-500'}`}>PayPal</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex flex-col items-center justify-center py-2.5 rounded-lg border transition-all ${paymentMethod === 'card' ? 'bg-purple-600/20 border-purple-500' : 'bg-[#151932] border-white/5 hover:border-white/20'}`}
                      >
                        <CreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-orange-400' : 'text-orange-400/70'}`} />
                        <span className={`text-[9px] font-bold mt-1 ${paymentMethod === 'card' ? 'text-purple-300' : 'text-slate-500'}`}>Card</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('crypto')}
                        className={`flex flex-col items-center justify-center py-2.5 rounded-lg border transition-all ${paymentMethod === 'crypto' ? 'bg-purple-600/20 border-purple-500' : 'bg-[#151932] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`font-serif font-bold text-lg leading-none ${paymentMethod === 'crypto' ? 'text-slate-300' : 'text-slate-500'}`}>₿</span>
                        <span className={`text-[9px] font-bold mt-1 ${paymentMethod === 'crypto' ? 'text-purple-300' : 'text-slate-500'}`}>Crypto</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('bank')}
                        className={`flex flex-col items-center justify-center py-2.5 rounded-lg border transition-all ${paymentMethod === 'bank' ? 'bg-purple-600/20 border-purple-500' : 'bg-[#151932] border-white/5 hover:border-white/20'}`}
                      >
                        <Building className={`w-5 h-5 ${paymentMethod === 'bank' ? 'text-slate-300' : 'text-slate-500'}`} />
                        <span className={`text-[9px] font-bold mt-1 ${paymentMethod === 'bank' ? 'text-purple-300' : 'text-slate-500'}`}>Bank</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-[#1da851] hover:bg-[#199447] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(29,168,81,0.3)] transition-all hover:shadow-[0_0_30px_rgba(29,168,81,0.5)]"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <span>ORDER VIA WHATSAPP</span>
                  </button>
                  <button 
                    onClick={handleEmailOrder}
                    className="w-full bg-[#151932] border border-white/5 hover:bg-[#1a1f3d] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all hover:border-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    <span>ORDER VIA EMAIL</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
