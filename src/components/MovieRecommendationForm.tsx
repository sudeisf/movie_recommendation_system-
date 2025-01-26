// src/components/MovieRecommendationForm.js
import { useState } from 'react';

interface MovieRecommendationFormProps {
  onSubmit: (title: string, numRecommendations: number) => void;
}

function MovieRecommendationForm({ onSubmit }: MovieRecommendationFormProps) {
  const [title, setTitle] = useState('');
  const [numRecommendations, setNumRecommendations] = useState(5);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit(title, numRecommendations);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto mt-8">
      <div>
        <label htmlFor="title" className="block text-lg font-semibold">Movie Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter a movie title"
        />
      </div>
      <div>
        <label htmlFor="numRecommendations" className="block text-lg font-semibold">Number of Recommendations</label>
        <input
          id="numRecommendations"
          type="number"
          value={numRecommendations}
          onChange={(e) => setNumRecommendations(Number(e.target.value))}
          className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          min="1"
          max="10"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Get Recommendations
      </button>
    </form>
  );
}

export default MovieRecommendationForm;
