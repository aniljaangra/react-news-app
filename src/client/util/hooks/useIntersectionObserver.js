/**
 * Created by Anil Jangra on 5/22/2021
 */
import { useCallback, useEffect } from 'react';
// infinite scrolling with intersection observer
const useIntersectionObserver = (scrollRef, callback) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            callback();
          }
        });
      }, { rootMargin: '500px 0px 500px 0px' }).observe(node);
    },
    [],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export default useIntersectionObserver;
