import { useState } from 'react';
import MovieRecommendationForm from './components/MovieRecommendationForm';
import MovieRecommendationList from './components/MovieRecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleFormSubmit = async (title: any, numRecommendations: any) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/recommend/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          num_recommendations: numRecommendations,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data.recommendations);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-6 text-center text-2xl font-semibold">
        Movie Recommendation System
      </header>
      <main className="p-6">
        <MovieRecommendationForm onSubmit={handleFormSubmit} />
        <MovieRecommendationList recommendations={recommendations} />
      </main>
    </div>
  );
}

export default App;
