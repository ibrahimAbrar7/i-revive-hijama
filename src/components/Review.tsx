'use client';  // Add this line at the top

import React, { useEffect, useState } from 'react';

interface ReviewProps {
  reviews: {
    id: number;
    name: string;
    rating: number;
    comment: string;
  }[];
}

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');  // State to hold error message

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      setLoading(true);
      setError('');  // Reset error state before new fetch

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?placeid=YOUR_PLACE_ID&fields=reviews&key=YOUR_API_KEY`
        );
        const data = await response.json();

        if (data.status === 'OK' && data.result.reviews) {
          setGoogleReviews(data.result.reviews);
        } else {
          setError('Failed to fetch Google reviews.');  // Set error message if the response isn't OK
        }
      } catch (err) {
        console.error(err);  // Log the error to the console
        setError('Error fetching reviews.');  // Set error message in case of an exception
      } finally {
        setLoading(false);  // Stop loading indicator after fetching is complete
      }
    };

    fetchGoogleReviews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center mb-4">
              <div className="text-lg font-medium text-gray-900">{review.name}</div>
              <div className="ml-2 text-yellow-500">
                {'★'.repeat(review.rating)}{' '}
                {'☆'.repeat(5 - review.rating)} {/* Display star ratings */}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}

        <h3 className="text-xl font-semibold text-gray-800 mt-8">Live Google Reviews</h3>

        {loading ? (
          <div className="text-center text-gray-600">Loading Google reviews...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>  
        ) : googleReviews.length === 0 ? (
          <div className="text-center text-gray-600">No live reviews available.</div>
        ) : (
          <div className="space-y-6 mt-4">
            {googleReviews.map((review, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-lg font-medium text-gray-900">{review.author_name}</div>
                  <div className="ml-2 text-yellow-500">
                    {'★'.repeat(review.rating)}{' '}
                    {'☆'.repeat(5 - review.rating)} {/* Display star ratings */}
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
