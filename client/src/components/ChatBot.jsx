import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const initialOptions = [
    { id: 'products', text: '🔬 Our Products' },
    { id: 'catalogue', text: '📖 Show Catalogue' },
    { id: 'quote', text: '📝 Request a Quote' },
    { id: 'contact', text: '📞 Contact Info' },
    { id: 'location', text: '📍 Company Location' }
  ];

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: 'Namaste! Welcome to Optics Technology. What information are you looking for today?',
      options: initialOptions
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option) => {
    // Add user's selection as a message
    const userMsg = { id: Date.now(), type: 'user', text: option.text };
    setMessages(prev => [...prev, userMsg]);

    // Simulate typing delay
    setTimeout(() => {
      let botResponse = { id: Date.now() + 1, type: 'bot', text: '' };

      switch (option.id) {
        case 'products':
          botResponse.text = 'We are a leading manufacturer of Laboratory Testing Instruments like Autoclaves, Incubators, Hot Air Ovens, and more. You can check our full range on the Instruments page.';
          botResponse.actionLink = { text: 'View All Instruments', url: '/products' };
          break;
        case 'catalogue':
          botResponse.text = 'You can download and view our complete high-precision laboratory instruments catalogue by clicking the button below.';
          botResponse.actionLink = { text: '📄 Download Full Catalogue PDF', url: '/catalogue.pdf' };
          break;
        case 'quote':
          botResponse.text = 'To get a quick quotation, you can use the "GET QUOTE" button at the top of the screen, or send us an email at opticstechnology.info@gmail.com with your requirements.';
          break;
        case 'contact':
          botResponse.text = 'Here are our contact details:\nPhone: +91-9811238151, +91-9811236960\nEmail: info@opticstechnology.in\nAlt Email: opticstechnology.info@gmail.com';
          break;
        case 'location':
          botResponse.text = 'We are located at:\n2/3, DSIDC Community Works Centre,\nJ-Block, Shakurpur, (Opp, Britannia Industries)\nDelhi - 110034, India.';
          break;
        case 'main_menu':
          botResponse.text = 'Here is the main menu. How else can I help you?';
          botResponse.options = initialOptions;
          break;
        default:
          botResponse.text = 'I am sorry, I did not understand that.';
      }

      // Add a "Main Menu" option if it's not already the main menu
      if (option.id !== 'main_menu') {
        botResponse.options = [{ id: 'main_menu', text: '⬅️ Back to Main Menu' }];
      }

      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 border border-white/20"
      >
        {isOpen ? <X size={28} className="md:w-8 md:h-8" /> : <MessageSquare size={28} className="md:w-8 md:h-8" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-[90px] right-4 md:bottom-[110px] md:right-8 z-[100] w-[calc(100vw-32px)] md:w-[380px] h-[500px] md:h-[550px] max-h-[calc(100vh-120px)] bg-slate-900 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-primary to-blue-700 flex items-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-md relative z-10">
                <Bot size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-black text-lg">Optics Support</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-slate-900"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed whitespace-pre-wrap ${
                    msg.type === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20' 
                    : 'bg-white/10 text-white border border-white/10 rounded-tl-none shadow-xl'
                  }`}>
                    {msg.text}
                  </div>

                  {/* Render Link if exists */}
                  {msg.actionLink && (
                    msg.actionLink.url.endsWith('.pdf') ? (
                      <a 
                        href={msg.actionLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-xs font-bold bg-white text-primary px-4 py-2 rounded-full shadow-lg hover:bg-slate-200 transition-colors flex items-center gap-1"
                      >
                        {msg.actionLink.text} <ChevronRight size={14} />
                      </a>
                    ) : (
                      <Link 
                        to={msg.actionLink.url}
                        className="mt-2 text-xs font-bold bg-white text-primary px-4 py-2 rounded-full shadow-lg hover:bg-slate-200 transition-colors flex items-center gap-1"
                      >
                        {msg.actionLink.text} <ChevronRight size={14} />
                      </Link>
                    )
                  )}

                  {/* Render Options if they exist */}
                  {msg.options && (
                    <div className="mt-3 flex flex-col gap-2 w-[85%]">
                      {msg.options.map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionClick(opt)}
                          className="text-left px-4 py-3 text-sm font-bold bg-slate-800 text-white border border-white/10 rounded-xl hover:bg-primary hover:border-primary transition-all shadow-sm"
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Footer Area */}
            <div className="p-4 border-t border-white/5 bg-slate-950 flex justify-center items-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <Sparkles size={10} /> Automated Support System
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
