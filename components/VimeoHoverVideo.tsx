"use client";
import { useRef, useEffect } from "react";

export default function VimeoHoverVideo({ videoId }: { videoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load Vimeo Player API if not already loaded
    if (typeof window !== 'undefined' && !window.Vimeo) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.onload = () => {
        initializePlayer();
      };
      document.head.appendChild(script);
    } else if (window.Vimeo) {
      initializePlayer();
    }

    function initializePlayer() {
      if (iframeRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.play().catch((error: any) => {
        console.log('Vimeo play error:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (playerRef.current) {
      playerRef.current.pause().catch((error: any) => {
        console.log('Vimeo pause error:', error);
      });
    }
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1&loop=1&controls=0&background=0`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full rounded-xl"
        title="seo copy"
      />
    </div>
  );
}

// Extend Window interface for Vimeo
declare global {
  interface Window {
    Vimeo: any;
  }
}
