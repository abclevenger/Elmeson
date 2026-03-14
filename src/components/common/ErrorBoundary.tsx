"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex flex-col items-center justify-center px-6 py-12 bg-[var(--warm-100)] text-[var(--charcoal)]">
          <p className="text-[var(--warm-700)] mb-4">Something went wrong.</p>
          <Link
            href="/"
            className="btn-primary inline-flex min-h-[44px] items-center justify-center"
          >
            Back to Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
