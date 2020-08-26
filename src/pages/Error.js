import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <>
    <h2>Page Not Fount</h2>
    <Link to="/" className="btn-primary">
      Return home
    </Link>
  </>
);

export default ErrorPage;
