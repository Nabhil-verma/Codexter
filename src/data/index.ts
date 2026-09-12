import type { Track } from "./types";
import { webTrack } from "./track-web";
import { reactTrack } from "./track-react";
import { backendTrack } from "./track-backend";
import { dsaTrack } from "./track-dsa";
import { pythonTrack } from "./track-python";
import { gitTrack } from "./track-git";

export type { Track, Lesson } from "./types";
export type { Check, QuizQuestion } from "./types";

export const tracks: Track[] = [
  webTrack,
  reactTrack,
  backendTrack,
  dsaTrack,
  pythonTrack,
  gitTrack,
];

export function findTrack(trackId: string) {
  return tracks.find((t) => t.id === trackId);
}

export function findLesson(trackId: string, lessonId: string) {
  return findTrack(trackId)?.lessons.find((l) => l.id === lessonId);
}

export function lessonKey(trackId: string, lessonId: string) {
  return trackId + "/" + lessonId;
}

export const totalLessonCount = tracks.reduce((n, t) => n + t.lessons.length, 0);
