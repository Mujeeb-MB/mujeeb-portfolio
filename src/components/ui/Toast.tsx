import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
    message: string;
    onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
            <div className="glass-strong border border-yellow-200 dark:border-yellow-800 rounded-xl px-4 py-3 shadow-glow-lg flex items-center gap-3 min-w-[300px]">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-900 dark:text-white flex-1">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-4 h-4 text-gray-500" />
                </button>
            </div>
        </div>
    );
}