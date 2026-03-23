import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionContainer = React.memo(({ children }) => (
  <motion.div
    className="flex space-x-16 items-center z-10 relative"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 60,
    }}
  >
    {children}
  </motion.div>
));

MotionContainer.displayName = "MotionContainer";

const LoadingSkeleton = () => (
  <div className="flex space-x-16 items-center">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="flex-shrink-0 w-48 h-24 bg-gray-200 rounded-lg animate-pulse"
      />
    ))}
  </div>
);

const ErrorState = ({ onRetry }) => (
  <div className="flex flex-col items-center justify-center py-8">
    <p className="text-gray-500 mb-4">Unable to load partners at the moment</p>
    <button
      onClick={onRetry}
      className="text-blue-600 hover:text-blue-700 font-medium"
    >
      Try again
    </button>
  </div>
);

const EmptyState = () => (
  <div className="py-8 text-center text-gray-500">Partners coming soon</div>
);

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPartners = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/partners");

      if (!response.ok) {
        throw new Error("Failed to fetch partners");
      }

      const data = await response.json();
      setPartners(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadPartners = async () => {
      await fetchPartners();
    };

    if (isMounted) {
      loadPartners();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="my-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Our Sponsors, Partners, and Collaborators
      </h2>

      <div className="relative overflow-hidden bg-gradient-to-r from-white via-gray-100 to-white py-8 rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />

        {loading && <LoadingSkeleton />}

        {error && <ErrorState onRetry={fetchPartners} />}

        {!loading && !error && partners.length === 0 && <EmptyState />}

        {!loading && !error && partners.length > 0 && (
          <MotionContainer>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner._id || partner.name}-${index}`}
                className="flex-shrink-0 w-48 mx-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} Logo`}
                  width={150}
                  height={80}
                  className="mx-auto h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </MotionContainer>
        )}
      </div>
    </section>
  );
};

Partner.displayName = "Partner";

export default Partner;
