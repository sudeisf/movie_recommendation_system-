type Movie = {
  poster: string;
  title: string;
  genres: string;
  overview: string;
};

type Props = {
  recommendations: Movie[];
};

function MovieRecommendationList({ recommendations }: Props) {
    if (!recommendations || recommendations.length === 0) {
      return <div className="text-center mt-4">No recommendations found.</div>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {recommendations.map((movie, index) => (
          <div key={index} className="border rounded-md p-4 bg-white shadow-md">
            <div className="relative w-full h-0 pb-[56.25%] mb-4"> {/* 16:9 Aspect Ratio */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-600">{movie.genres}</p>
            <p className="mt-2">{movie.overview}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default MovieRecommendationList;
