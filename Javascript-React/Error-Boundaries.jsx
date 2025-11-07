// 🔹 29. What are Error Boundaries?

//. components that catch Javascript errors in child component and show a fallback ui

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError ? <h2>Error occurred!</h2> : this.props.children;
  }
}
