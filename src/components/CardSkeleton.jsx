import "./../css/CardSkeleton.css";

export default function CardSkeleton() {
  return (
    <div className="col my-2">
      <div className="card-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );
}

// Componente per mostrare più skeleton
export function CardSkeletonGrid({ count = 6 }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
