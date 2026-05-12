import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [state, handleSubmit] = useForm("xkoyydge");

    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-8 border border-robot-accent bg-robot-accent/5 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.2)]"
                >
                    <h3 className="text-2xl font-black text-robot-accent mb-2">TRANSMISSION COMPLETE</h3>
                    <p className="text-white/60 font-mono text-sm">Data received. Systems operational. We will be in touch, Tariq.</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-56 px-6">
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                    Ready to <span className="text-robot-accent">Connect?</span>
                </h2>
                <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">Initiate Communication Protocol</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-robot-accent text-[10px] uppercase font-bold tracking-widest mb-2 ml-4">
                        User Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        className="bg-white/5 border border-white/10 p-4 rounded-full text-white placeholder:text-white/10 outline-none focus:border-robot-accent focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-2 ml-4" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-robot-accent text-[10px] uppercase font-bold tracking-widest mb-2 ml-4">
                        Secure Message Payload
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter Message..."
                        rows="5"
                        className="bg-white/5 border border-white/10 p-6 rounded-3xl text-white placeholder:text-white/10 outline-none focus:border-robot-accent focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all resize-none"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-2 ml-4" />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 bg-robot-accent text-black font-black uppercase tracking-[0.3em] text-xs rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]"
                >
                    {state.submitting ? "UPLOADING..." : "EXECUTE TRANSMISSION"}
                </button>
            </form>
        </div>
    );
};

export default Contact;