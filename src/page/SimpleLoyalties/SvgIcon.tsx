import React, { useState, useEffect } from 'react';

interface SVGProps {
  url: string;
}

const SVGIcon: React.FC<SVGProps> = ({ url }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        const text = await response.text();
        setSvgContent(text);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSVG();
  }, [url]);

  return (
  svgContent
      
      
    
  );
};

export default SVGIcon;
