import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-surface p-6 font-sans">
          <div className="max-w-md w-full bg-white border border-slate-200 rounded-[4px] p-8 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 bg-amber-50 border border-amber-200 text-amber-600 rounded-[4px] mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">refresh</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-900">Reloading Riitu Institution</h2>
            <p className="text-xs text-slate-600">
              A temporary rendering update occurred. Please refresh the page to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-gold text-xs px-6 py-2.5 w-full"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
