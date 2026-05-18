import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import emailjs from "emailjs-com";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAILJS_SERVICE_ID = "service_1y9caf2";
const EMAILJS_TEMPLATE_ID = "template_sryi2cq";
const EMAILJS_PUBLIC_KEY = "4b1djngJN3lrUXUl0";

let emailJsInitialized = false;

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (emailJsInitialized) {
      return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);
    emailJsInitialized = true;
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setIsSubmitting(false);
      setIsSuccess(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const timer = window.setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isSuccess, onClose]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sharmashivam6214@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage(
        "Something went wrong. Try emailing me directly at sharmashivam6214@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative mx-4 w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0f] p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button
              type="button"
              aria-label="Close contact modal"
              onClick={onClose}
              className="absolute right-4 top-4 text-white/70 transition hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="font-display text-4xl text-white">
              LET&apos;S TALK
            </h2>
            <p className="mb-8 mt-2 text-sm text-white/60">
              Got a project? Tell me about it.
            </p>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <CheckCircle size={48} className="text-cyan-400" />
                <p className="text-2xl font-bold text-white">Message Sent!</p>
                <p className="text-white/60">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:outline-none"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Project Type / Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {errorMessage && (
                  <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
