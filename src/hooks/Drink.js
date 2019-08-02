import { useState, useEffect } from 'react';

export function fetchDrinkView() {
  return fetch('http://localhost:8080/drink')
  .then(
      response => response.json(),
      error => {
        throw new Error(error);
      },
  )
  .then(json => json);
}

export function useDrinkView() {
  const [isLoading, setIsLoading] = useState(false);
  const [viewObj, setViewObj] = useState(null);

  useEffect(
      () => {
        (async () => {
          setIsLoading(true);
          setViewObj(
              await fetchDrinkView()
          );
          setIsLoading(false);
        })();
      },
      []
  );
  return [isLoading, viewObj];
}
