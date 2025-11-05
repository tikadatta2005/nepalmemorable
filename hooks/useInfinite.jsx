"use client";
import { GetData } from "@/utils/GetData";
import React, { useEffect, useRef, useState, useCallback } from "react";

const useInfinite = (url, initialPage=0) => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [error, setError] = useState(null);

  // Memoize getData to prevent unnecessary re-renders
  const getData = useCallback(async () => {
    if (loading || completed) return;

    setLoading(true);
    setError(null);

    console.log(url);

    try {
      const res = await GetData(url?.replace(":page", page));

      if (res?.error) {
        throw new Error(
          res?.message || `HTTP error! status: ${res.status}`
        );
      }

      const newData = res?.data || [];

      // Only update if we got new data
      if (newData.length > 0) {
        setData((prev) => [...prev, ...newData]);
        setPage((prev) => prev + 1);
      }

      // Mark as completed if we got fewer items than expected
      if (newData.length < 20) {
        setCompleted(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
      setCompleted(true);
    } finally {
      setLoading(false);
    }
  }, [url, page, loading, completed]);

  useEffect(() => {
    const element = ref.current;
    if (!element || loading || completed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove async from forEach - call the memoized function
            getData();
          }
        });
      },
      {
        threshold: 0.01,
        // Add some margin to trigger slightly before element is fully visible
        rootMargin: "100px",
      }
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [getData]); // Now depends on getData instead of individual state values

  // Function to reset the hook (useful for refresh)
  const reset = useCallback(() => {
    setData([]);
    setPage(0);
    setCompleted(false);
    setError(null);
    setLoading(false);
  }, []);

  return {
    ref,
    loading,
    completed,
    data,
    error,
    reset,
  };
};

export default useInfinite;
