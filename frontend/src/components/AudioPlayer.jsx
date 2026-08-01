import React, { useRef, useState } from "react";
import { Play, Pause, AudioLines } from "lucide-react";

const fmt = (s) => {
  if (!s || isNaN(s) || !isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
};

// Custom, on-brand audio player used for audio uploaded inside articles.
export const AudioPlayer = ({ src, title }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [failed, setFailed] = useState(false);

  const toggle = async () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
      } catch (e) {
        try {
          a.load();
          await a.play();
        } catch (_) {
          /* ignore */
        }
      }
    } else {
      a.pause();
    }
  };

  const seek = (e) => {
    const a = ref.current;
    if (!a || !dur) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    a.currentTime = pct * dur;
    setCur(a.currentTime);
  };

  const pct = dur ? (cur / dur) * 100 : 0;

  return (
    <div
      data-testid="custom-audio-player"
      className="my-8 flex items-center gap-4 rounded-2xl bg-[#160638] p-4 md:p-5 ring-1 ring-white/10"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        data-testid="audio-play-toggle"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0603f] text-white transition-transform hover:scale-105 active:scale-95"
      >
        {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
      </button>

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex items-center gap-2">
          <AudioLines size={15} className="shrink-0 text-[#ffb59c]" />
          <p className="truncate text-sm font-semibold text-white">
            {title || "Listen"}
          </p>
        </div>

        <div
          onClick={seek}
          className="group h-2 cursor-pointer rounded-full bg-white/15"
        >
          <div
            className="relative h-full rounded-full bg-[#f0603f]"
            style={{ width: `${pct}%` }}
          >
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-white opacity-0 shadow transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="mt-1.5 flex justify-between text-xs tabular-nums text-white/60">
          <span>{failed ? "Audio unavailable" : fmt(cur)}</span>
          <span>{fmt(dur)}</span>
        </div>
      </div>

      <audio
        ref={ref}
        src={src}
        preload="metadata"
        playsInline
        onError={() => setFailed(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />
    </div>
  );
};

export default AudioPlayer;
