import React from 'react';

import { ErrorMessage } from './styled';

interface ErrorProps {
  message: string;
}

const displayError = ({ message }: ErrorProps) => (
  <ErrorMessage>
    {message}
  </ErrorMessage>
);

export default displayError;
