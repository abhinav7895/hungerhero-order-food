import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Error Info: " + info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-white text-4xl">Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;