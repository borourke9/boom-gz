"use client";
import { useRef, useEffect, useState } from "react";

export default function VimeoHoverVideo({ videoId, showPlayButton = false }: { videoId: string; showPlayButton?: boolean }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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
        
        // Listen for play/pause events
        playerRef.current.on('play', () => setIsPlaying(true));
        playerRef.current.on('pause', () => setIsPlaying(false));
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, isClient]);

  const handleMouseEnter = () => {
    if (playerRef.current && !showPlayButton) {
      playerRef.current.play().catch((error: any) => {
        console.log('Vimeo play error:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (playerRef.current && !showPlayButton) {
      playerRef.current.pause().catch((error: any) => {
        console.log('Vimeo pause error:', error);
      });
    }
  };

  const handlePlayClick = () => {
    if (playerRef.current) {
      playerRef.current.play().catch((error: any) => {
        console.log('Vimeo play error:', error);
      });
    }
  };

  if (!isClient) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gray-100 flex items-center justify-center rounded-xl">
        <p className="text-gray-500">Loading video...</p>
      </div>
    );
  }

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
      
      {/* Play Button Overlay - only show when showPlayButton is true and not playing */}
      {showPlayButton && !isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

// Extend Window interface for Vimeo
declare global {
  interface Window {
    Vimeo: any;
  }
}
