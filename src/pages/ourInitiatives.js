import React, { useEffect, useState } from "react";
import {
  Heart,
  Users,
  Share2,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FallbackImage from "/public/images/20211107_161110.jpg";

const Card = ({ className, children }) => (
  <div className={`rounded-lg border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Button = ({ className, children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${className}`}
  >
    {children}
  </span>
);

const InitiativeCard = ({
  _id,
  imageSrc,
  imageAlt,
  title,
  description,
  category,
  impact,
  location,
  nextEvent,
  supportCount: initialSupportCount = 50,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const [supportCount, setSupportCount] = useState(initialSupportCount);
  const [isSupported, setIsSupported] = useState(false);

  const handleImageError = () => {
    setImgSrc(FallbackImage);
  };

  const handleSupport = () => {
    if (!isSupported) {
      setSupportCount((prev) => prev + 1);
      setIsSupported(true);
    }
  };

  const descriptionId = `description-${title?.replace(/\s+/g, "-").toLowerCase() || _id}`;

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-xl overflow-hidden bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImageError}
        />
        {category && (
          <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
            {category}
          </Badge>
        )}
      </div>
      <CardHeader>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-800">
          {title}
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
          {location && (
            <div className="flex items-center">
              <MapPin
                size={16}
                className="mr-1 text-emerald-600 flex-shrink-0"
              />
              <span>{location}</span>
            </div>
          )}
          {impact && (
            <div className="flex items-center">
              <Users
                size={16}
                className="mr-1 text-emerald-600 flex-shrink-0"
              />
              <span>{impact}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div id={descriptionId}>
          <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-3"}`}>
            {description}
          </p>
        </div>
        {description && description.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
            aria-expanded={isExpanded}
            aria-controls={descriptionId}
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp size={16} aria-hidden="true" />
              </>
            ) : (
              <>
                Read more <ChevronDown size={16} aria-hidden="true" />
              </>
            )}
          </button>
        )}

        {nextEvent && (
          <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
            <h3 className="font-semibold text-emerald-800 flex items-center">
              <Calendar
                size={16}
                className="mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              Upcoming Event
            </h3>
            <p className="text-sm text-emerald-600 mt-1">{nextEvent}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-2">
          <Button
            className={`border ${isSupported ? "bg-emerald-100 border-emerald-300" : "border-emerald-600 hover:bg-emerald-50"} ${isSupported ? "text-emerald-600" : "text-emerald-600"}`}
            onClick={handleSupport}
            aria-label={`Support ${title}`}
            aria-pressed={isSupported}
          >
            <Heart
              size={16}
              className={`mr-1 inline ${isSupported ? "fill-current" : ""}`}
              aria-hidden="true"
            />
            {isSupported ? "Supported" : "Support"} ({supportCount})
          </Button>
          <Button
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
            aria-label={`Share ${title}`}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title,
                  text: description,
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 size={16} className="mr-1 inline" aria-hidden="true" />
            Share
          </Button>
        </div>
        <Link
          href="/getInvolved"
          className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Get Involved
          <ArrowRight size={16} className="ml-1" aria-hidden="true" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const LoadingSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
      >
        <div className="h-48 bg-gray-200 animate-pulse" />
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-12">
    <p className="text-red-500 text-lg mb-4">
      {message || "Something went wrong"}
    </p>
    <Button
      onClick={onRetry}
      className="bg-emerald-600 text-white hover:bg-emerald-700"
    >
      <RefreshCw size={16} className="mr-2 inline" />
      Try Again
    </Button>
  </div>
);

const OurInitiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInitiatives = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/initiatives");

      if (!response.ok) {
        throw new Error("Failed to load initiatives");
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setInitiatives(data);
      } else if (data.data && Array.isArray(data.data)) {
        setInitiatives(data.data);
      } else {
        throw new Error("Unexpected data format");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitiatives();
  }, []);

  return (
    <section className="bg-emerald-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Initiatives
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Join us in making a difference. Every action counts, every life
            matters.
          </p>
        </div>

        {loading && <LoadingSkeleton />}

        {error && <ErrorState message={error} onRetry={fetchInitiatives} />}

        {!loading && !error && initiatives.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No initiatives available at the moment. Check back soon!
          </div>
        )}

        {!loading && !error && initiatives.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative) => (
              <InitiativeCard
                key={initiative._id || initiative.id || initiative.title}
                {...initiative}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurInitiatives;
