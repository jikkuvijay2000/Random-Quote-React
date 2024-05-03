import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const randomQuote = response.data;
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNextQuote = () => {
    fetchQuote();
  };

  return (
    <div className="container mt-5 text-center">
      {quote ? (
        <div className="bg-tertiary p-4">
          <h3>"{quote.content}"</h3>
          <p className="mt-4"> {quote.author}</p>
          <Button onClick={handleNextQuote} className="mt-4" variant="success">
            Next Quote
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default QuoteGenerator;
